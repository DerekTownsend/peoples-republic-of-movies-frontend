import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showMovie} from '../actions'
import no_poster from '../no_poster.png';

class MovieShowContainer extends Component {
  fetchMovie = (id) =>{
    Api.fetchMovie(id)
    .then(movie => {
      this.props.showMovie(movie.movies)
    })
  }
  handleNoImage = (error) =>{
    error.target.src = no_poster
  }
  
  displayMovie = () =>{
    return(
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster_url} alt={this.props.movie.title} onError={this.handleNoImage}/>

      </div>
    )
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
      {this.props.movie.id ? this.displayMovie() : null}
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
