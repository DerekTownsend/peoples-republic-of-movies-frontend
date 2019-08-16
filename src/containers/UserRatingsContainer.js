import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import { setPageMax, fetchRatings} from '../actions'
import UserRatingsIntermediary from '../components/UserRatingsIntermediary'
import PageButtons from '../components/PageButtons';

class UserRatingsContainer extends Component {

  fetchRatings = ()=>{
    Api.fetchUserRatings(this.props.page)
    .then(ratings => {
      this.props.setPageMax(Math.ceil(ratings.total/24))
      this.props.fetchRatings(ratings.ratings)
    })
  }

  render(){
    return (
      <div className="profile_page">
        <h3>Ratings</h3>
        {this.fetchRatings()}
        <PageButtons/>
        <UserRatingsIntermediary />
        <PageButtons/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    },
    fetchRatings: (ratings) => {
      dispatch(fetchRatings(ratings))
    }
  }
}
// export default UserRatingsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(UserRatingsContainer);
