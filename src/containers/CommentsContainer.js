import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { fetchComments} from '../actions'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'

class CommentsContainer extends Component {

  sortComments = (a,b) =>{
    const commentA = a.id
    const commentB = b.id
    if (commentA > commentB) {
      return -1;
    }
    if (commentA < commentB) {
      return 1;
    }
    return 0;
  }

  displayComments = () =>{
    const sortedComments = this.props.comments.sort((a, b) => this.sortComments(a,b))
    return sortedComments.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
    })
  }
  render(){
    return (
      <div>
        <h2>Comments</h2>
        {localStorage.getItem("user") ? <CommentForm /> : null}

        {this.displayComments()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

// export default CommentsContainer;
export default connect(mapStateToProps, null)(CommentsContainer);
