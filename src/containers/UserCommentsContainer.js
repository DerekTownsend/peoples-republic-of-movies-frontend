import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserComment from '../components/UserComment'
import PageButtons from '../components/PageButtons';

class UserCommentsContainer extends Component {

  displayComments = () =>{
    return this.props.comments.map((comment)=>{
      return <UserComment key={comment.id} comment={comment}/>
    })
  }

  render(){
    return (
      <div className="profile_page">

        <h2>Comments</h2>
        <PageButtons/>
        {this.displayComments()}
        <PageButtons/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

// export default UserCommentsContainer;
export default connect(mapStateToProps, null)(UserCommentsContainer);
