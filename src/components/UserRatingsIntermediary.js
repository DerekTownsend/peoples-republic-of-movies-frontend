import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setPageMax} from '../actions'
import { Link } from 'react-router-dom';

class UserRatingsIntermediary extends Component {

  displayRatings = ()=>{
    return this.props.ratings.map((rating)=>{
      return <p key={rating.id}><Link to={`/movies/${rating.movie.id}`}>{rating.movie.title}</Link> Rated: {rating.amount}%</p>
    })
  }

  render(){
    return (
      <div>
        {this.props.ratings.length !==0 ? this.displayRatings() : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ratings: state.ratings
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    }
  }
}
// export default UserRatingsIntermediary;
export default connect(mapStateToProps, mapDispatchToProps)(UserRatingsIntermediary);
