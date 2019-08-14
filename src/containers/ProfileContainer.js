import React, { Component } from 'react';
import {connect} from 'react-redux'
import Comment from '../components/Comment'

class ProfileContainer extends Component {
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
    const sortedComments = this.props.user.liked_comments.sort((a, b) => this.sortComments(a,b))
    return sortedComments.map((comment)=>{
      return <Comment key={comment.id} comment={comment} show={true}/>
    })
  }

  // {console.log(this.props.user.movie_comments)}
  // {this.props.user.liked_comments ? this.displayComments() : null}
  render(){
    return (
      <div>
        <h2>Welcome Back {this.props.user.firstname}</h2>
        <h3>Favorite Movies </h3>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUser: (user) => {
//       dispatch(fetchUser(user))
//     },
//   }
// }

export default connect(mapStateToProps, null)(ProfileContainer);
