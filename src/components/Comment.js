import React, { Component } from 'react';
import {connect} from 'react-redux'
import Api from '../services/api';
import { fetchComments, deleteComment} from '../actions'
import CommentEditForm from './CommentEditForm'

class Comment extends Component {
  state = {
    showEditForm: false
  }
  handleClick = (e) =>{
    if(e.target.className === "edit"){
      this.setState({showEditForm: true})
    }else if(e.target.className === "delete"){
      Api.deleteComment(this.props.comment.id)
      .then(message => this.props.deleteComment(this.props.comment.id))
    }
  }
  updateEditState = ()=>{
    this.setState({showEditForm: false})
  }
  handleLike = () => {
    const bodyObj = {
      like:{
        user_id: this.props.user.id,
        comment_id: this.props.comment.id
      }
    }
    Api.likeComment(bodyObj)
    .then(movie => this.props.fetchComments(movie.movies.comments))
  }

  handleUnlike = () => {
    const myLike = this.props.comment.likes.find((like)=> like.user_id === this.props.user.id)
    Api.unlikeComment(myLike.id)
    .then(movie => this.props.fetchComments(movie.movies.comments))
  }

  showLikeButtons = () =>{
    return !this.props.comment.likes.find((like)=> like.user_id === this.props.user.id)  ? <button onClick={this.handleLike} className="like">Like  <i className="far fa-thumbs-up"></i></button> : <button onClick={this.handleUnlike} className="unlike">Unlike  <i className="fas fa-thumbs-up"></i></button>
  }
  showEditDeleteButtons = () =>{
    return (
      <div>
        <button onClick={this.handleClick} className="edit">Edit</button>
        <button onClick={this.handleClick} className="delete">Delete</button>
      </div>
    )
  }
  showComment = ()=>{
    return (
      <div>
        <h3>{this.props.comment.title}</h3>
        {!this.props.show ? <p>By: {this.props.comment.user.username}</p> : null}
        <p>{this.props.comment.content}</p>
        <p>Likes: {this.props.comment.likes.length}</p>
        {this.props.user.id ? this.showLikeButtons() : null}
        {this.props.comment.user.id === this.props.user.id ?  this.showEditDeleteButtons(): null}

      </div>
    )
  }
  render(){
    return (
      <div className="comment">
        {this.state.showEditForm ? <CommentEditForm comment={this.props.comment} updateEditState={this.updateEditState}/> : this.showComment()}

      </div>
    )
  }
}
// {this.props.user.id ===  ?  : null}
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
    deleteComment: (id) => {
      dispatch(deleteComment(id))
    },
  }
}

// export default Comment;
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
