import React, { Component } from 'react';
import {connect} from 'react-redux'
import Api from '../services/api';
import {fetchMovies, setPageMax} from '../actions'
import PageButtons from '../components/PageButtons';
import MoviesIntermediary from '../components/MoviesIntermediary';

class FavoritesContainer extends Component {

  fetchUserMovies = () =>{
    Api.fetchUserMovies(this.props.page)
    .then(movies => {
      this.props.setPageMax(Math.ceil(movies.total/24))
      this.props.fetchMovies(movies.movies)
    })
  }

  render(){
    return (
      <div className="profile_page">
        <h3>Favorite Movies</h3>
        {this.fetchUserMovies()}
        <PageButtons/>
        <MoviesIntermediary/>
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
    fetchMovies: (movies) => {
      dispatch(fetchMovies(movies))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    }
  }
}

// export default FavoritesContainer;
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
