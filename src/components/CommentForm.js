import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addComment} from '../actions'
import Api from '../services/api';

class CommentForm extends Component {
  state = {
    title: "",
    content: "",
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
        user_id: this.props.user.id,
        movie_id: this.props.movie.id
      }
    }
    Api.createComment(bodyObj)
    .then(comment => {
      this.props.addComment(comment)
      this.setState({
        title: "",
        content: "",
      })
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
    addComment: (comment) => {
      dispatch(addComment(comment))
    },
  }
}

// export default CommentForm;
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
