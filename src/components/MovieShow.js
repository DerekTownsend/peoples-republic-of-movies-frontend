import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import no_poster from '../no_poster.png';

class MovieShow extends Component {
  handleNoImage = (error) =>{
    error.target.src = no_poster
  }

  generateListItems = (items, type=null) =>{
    if (type) {
      return items.map((item)=>{
        return <li key={item.id}><Link to={`/${type}/${item.id}`}>{item.name}</Link></li>
      })
    }else {
      return items.split(",").map((item, index)=>{
        return <li key={index}>{item}</li>
      })
    }
  }
  calculateRating= () =>{
    if (this.props.movie.ratings.length > 0) {
      const rating = this.props.movie.ratings.reduce((accumulator, currentVal)=>{
        return currentVal.amount +accumulator
      },0)/this.props.movie.ratings.length;
      return rating.toFixed(1) + "%";
    }else{
      return "No Ratings";
    }
  }

  showDate = () => {
    // console.log(this.props.movie.released_date);
    // const date = Date.parse(this.props.movie.released_date)
    // const newDate = new Date(date)
    // console.log(newDate.getMonth());
    // console.log(newDate.getDate());
    // console.log(newDate.getFullYear());
      return this.props.movie.released_date;
  }
  // {!this.props.comment.likes.find((like)=> like.user_id === this.props.user.id) ? <button onClick={this.handleClick} className="like">Like</button> : <button onClick={this.handleClick} className="unlike">Unlike</button>}

  render(){
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster_url} alt={this.props.movie.title} onError={this.handleNoImage}/>
        <p>Rating: {this.calculateRating()}</p>
        <p>Plot: {this.props.movie.plot}</p>
        <p>Country: {this.props.movie.country}</p>
        <p>Language: {this.props.movie.language}</p>
        <p>Rated: {this.props.movie.mpaa_rating}</p>
        <p>Producer: {this.props.movie.producer}</p>
        <p>Released Date: {this.showDate()}</p>
        <h4>Directors</h4>
        <ul>
          {this.generateListItems(this.props.movie.director)}
        </ul>
        <h4>Writers</h4>
        <ul>
          {this.generateListItems(this.props.movie.writer)}
        </ul>
        <h4>Actors</h4>
        <ul>
          {this.generateListItems(this.props.movie.actors,"actors")}
        </ul>
        <h4>Genres</h4>
        <ul>
          {this.generateListItems(this.props.movie.genres,"genres")}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}
// export default MovieShow;
export default connect(mapStateToProps, null)(MovieShow);
