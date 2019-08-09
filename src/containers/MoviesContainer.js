import React, { Component } from 'react';
import {connect} from 'react-redux'
// import Api from '../services/api';
import Movie from '../components/Movie';
import PageButtons from '../components/PageButtons';

class MoviesContainer extends Component {
  displayMovies = () => {
    return this.props.movies.map((movie) => {
      return <Movie movie={movie} key={movie.id}/>
    })
  }

  componentDidMount(){
  }

  render(){
    return (
      <div>
        <PageButtons/>
        <div className="movies">
          {this.displayMovies()}
        </div>
        <PageButtons/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}


export default connect(mapStateToProps)(MoviesContainer);

// <button onClick={this.handleClick}>{this.props.page}</button>
// connect(mapStateToProps, mapDispatchToProps)()
