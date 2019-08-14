import React, { Component } from 'react';
import {connect} from 'react-redux'
import Api from '../services/api';
import { fetchComments} from '../actions'

class Comment extends Component {
  handleClick = (e) =>{
    if (e.target.className === "unlike") {
      const myLike = this.props.comment.likes.find((like)=> like.user_id === this.props.user.id)
      Api.unlikeComment(myLike.id)
      .then(movie => this.props.fetchComments(movie.movies.comments))
    }else if(e.target.className === "like"){
      const bodyObj = {
        like:{
          user_id: this.props.user.id,
          comment_id: this.props.comment.id
        }
      }
      Api.likeComment(bodyObj)
      .then(movie => this.props.fetchComments(movie.movies.comments))
    }
  }

  showButton = () =>{
    return !this.props.comment.likes.find((like)=> like.user_id === this.props.user.id)  ? <button onClick={this.handleClick} className="like">Like</button> : <button onClick={this.handleClick} className="unlike">Unlike</button>
  }
  render(){
    return (
      <div>
        <h3>{this.props.comment.title}</h3>
        {!this.props.show ? <p>By: {this.props.comment.user.username}</p> : null}
        <p>{this.props.comment.content}</p>
        <p>Likes: {this.props.comment.likes.length}</p>
        {this.props.user.id ? this.showButton() : null}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
  }
}

// export default Comment;
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
