import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showMovie} from '../actions'
import MovieShow from '../components/MovieShow'

class MovieShowContainer extends Component {
  fetchMovie = (id) =>{
    Api.fetchMovie(id)
    .then(movie => {
      this.props.showMovie(movie.movies)
    })
  }


  getMovie = () => {
    const id =this.props.match.params.id
    if (Number(id)) {
      this.fetchMovie(id)
    } else{
      this.props.history.push("/movies/all")
    }
  }

  componentDidMount(){
    this.getMovie()
  }
  render(){
    return (
      <div>
      {this.props.movie.id ? <MovieShow/> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMovie: (movie) => {
      dispatch(showMovie(movie))
    }
  }
}
// export default MovieShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MovieShowContainer);
