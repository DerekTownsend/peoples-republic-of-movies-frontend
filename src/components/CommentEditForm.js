import React, { Component } from 'react';
import {connect} from 'react-redux'
import { editComment} from '../actions'
import Api from '../services/api';

class CommentEditForm extends Component {
  state = {
    title: this.props.comment.title,
    content: this.props.comment.content,
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const bodyObj = {
      comment: {
        title: this.state.title,
        content: this.state.content,
      }
    }
    Api.editComment(bodyObj, this.props.comment.id)
    .then(comment => {
      this.props.editComment(comment)
      this.props.updateEditState()
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="create_comment">
        <input onChange={this.handleChange} id="title" name="title" value={this.state.title} placeholder="Title"/>
        <textarea onChange={this.handleChange} id="content" name="content" value={this.state.content} rows="4" cols="50" placeholder="Comment">
        </textarea>
        <input type="submit"/>
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    movie: state.movie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editComment: (comment) => {
      dispatch(editComment(comment))
    },
  }
}

// export default CommentEditForm;
export default connect(mapStateToProps, mapDispatchToProps)(CommentEditForm);
