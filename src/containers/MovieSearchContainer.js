import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchMovies, setPageMax, setPage } from '../actions'
import SearchPageButtons from '../components/SearchPageButtons';
import MoviesIntermediary from '../components/MoviesIntermediary';
import Api from '../services/api';

class MovieSearchContainer extends Component {
  fetchMovies = () => {
    this.props.setPage(Number(this.props.match.params.page))
    const bodyObj = {term: this.props.match.params.term, page: Number(this.props.match.params.page)}
    Api.searchMovies(bodyObj)
    .then( movies => {
      // console.log(movies.movies);
      this.props.fetchMovies(movies.movies)
      this.props.setPageMax(Math.ceil(movies.total/24))
    })
  }

  render(){
    return (
      <div>
      {this.fetchMovies()}
        <SearchPageButtons/>
        <h2>Search Results For "{this.props.match.params.term}": </h2>
        <MoviesIntermediary/>
        <SearchPageButtons/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (movies) => {
      dispatch(fetchMovies(movies))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    },
    setPage: (pageNumber) => {
      dispatch(setPage(pageNumber))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchContainer);
