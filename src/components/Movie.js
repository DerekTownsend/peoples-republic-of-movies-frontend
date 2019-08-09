import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import no_poster from '../no_poster.png';

class Movie extends Component {
  calculateRating= () =>{
    if (this.props.movie.ratings.length > 0) {
      return this.props.movie.ratings.reduce((accumulator, currentVal)=>{
        return currentVal.amount +accumulator
      },0)/this.props.movie.ratings.length + "%";
    }else{
      return "No Ratings";
    }
  }
  handleNoImage = (error) =>{
    error.target.src = no_poster

  }
  render(){
    return (
      <div className="movie">
        <h3>{this.props.movie.title}</h3>
        <img src={this.props.movie.poster_url} alt={this.props.movie.title} onError={this.handleNoImage}/>
        <p>{this.calculateRating() }</p>
        <p>{this.props.movie.mpaa_rating}</p>
        <Link to={`/movies/${this.props.movie.id}`}>See More</Link>
      </div>
    )
  }
}

export default Movie;
