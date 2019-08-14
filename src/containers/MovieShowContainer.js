import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showMovie, fetchComments, fetchUser} from '../actions'
import MovieShow from '../components/MovieShow'
import CommentsContainer from './CommentsContainer'

class MovieShowContainer extends Component {
  fetchMovie = (id) =>{
    Api.fetchMovie(id)
    .then(movie => {
      this.props.showMovie(movie.movies)
      this.props.fetchComments(movie.movies.comments)
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
  handleClick = (e) =>{
    if (e.target.className === "unfavorite") {
      const myFavorite = this.props.user.favorites.find((favorite)=> favorite.movie_id === this.props.movie.id)
      Api.unfavoriteMovie(myFavorite.id)
      .then(user => this.props.fetchUser(user))

    }else if(e.target.className === "favorite"){
      const bodyObj = {
        favorite:{
          user_id: this.props.user.id,
          movie_id: this.props.movie.id
        }
      }
      Api.favoriteMovie(bodyObj)
      .then(user => this.props.fetchUser(user))
    }
  }

  showFavButton = () =>{
    return !this.props.user.movie_favorites.find((movie)=> movie.id === this.props.movie.id)  ? <button onClick={this.handleClick} className="favorite">Favorite</button> : <button onClick={this.handleClick} className="unfavorite">Unfavorite</button>
  }

  componentDidMount(){
    this.getMovie()
  }
  render(){
    return (
      <div>
      {this.props.user.id ? this.showFavButton() : null}
      {this.props.movie.id ? <MovieShow/> : null}
      {this.props.movie.id ? <CommentsContainer /> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMovie: (movie) => {
      dispatch(showMovie(movie))
    },
    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
    fetchUser: (user)=> {
      dispatch(fetchUser(user))
    },
  }
}
// export default MovieShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MovieShowContainer);
