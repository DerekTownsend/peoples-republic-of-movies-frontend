import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchComments, setPageMax} from '../actions'
import FavoritesContainer from './FavoritesContainer'
import UserCommentsContainer from './UserCommentsContainer'
import UserRatingsContainer from './UserRatingsContainer'
import Api from '../services/api';

class ProfileContainer extends Component {
  getComments = ()=>{
    Api.fetchUserComments(this.props.page)
    .then(comments => {
      this.props.setPageMax(Math.ceil(comments.total/24))
      this.props.fetchComments(comments.comments)
    })
  }
  updatePage = () => {
    if (this.props.match.params.type === "favorites") {
      return <FavoritesContainer/>
    }else if (this.props.match.params.type === "comments") {
      this.getComments()
      return <UserCommentsContainer />
    }else if (this.props.match.params.type === "ratings") {
      return <UserRatingsContainer />
    } else {
      this.props.history.push("/profile/favorites")
    }
  }

  render(){
    return (
      <div className="profile">
        <h2>Welcome Back {this.props.user.firstname}</h2>
        <Link to="/profile/favorites" className={this.props.match.params.type === "favorites" ? "active_profile profile_nav" : "profile_nav"}>Favorite Movies</Link>
        <Link to="/profile/comments" className={this.props.match.params.type === "comments" ? "active_profile profile_nav" : "profile_nav"}>Comments</Link>
        <Link to="/profile/ratings" className={this.props.match.params.type === "ratings" ? "active_profile profile_nav" : "profile_nav"}>Ratings</Link>
        {this.updatePage()}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
