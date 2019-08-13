import React, { Component } from 'react';
import {connect} from 'react-redux'
import Api from '../services/api';
import PageButtons from '../components/PageButtons';
import {fetchMovies, setPageMax} from '../actions'
import MoviesIntermediary from '../components/MoviesIntermediary';

class MoviesContainer extends Component {

  fetchMovies = () => {
    Api.fetchMovies(this.props.page)
    .then(movies => {
      this.props.setPageMax(Math.ceil(movies.total/24))
      this.props.fetchMovies(movies.movies)
    })
  }
  render(){
    return (
      <div>
        {this.fetchMovies()}
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

// <button onClick={this.handleClick}>{this.props.page}</button>
// connect(mapStateToProps, mapDispatchToProps)()
