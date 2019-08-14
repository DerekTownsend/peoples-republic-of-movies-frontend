import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import no_poster from '../no_poster.png';
import Api from '../services/api';
import { showMovie, fetchUser} from '../actions'
import CreateRatingForm from './CreateRatingForm';
import EditRatingForm from './EditRatingForm';

class MovieShow extends Component {

  state = {
    displayRatingForm: false,
    displayRatingEditForm: false,
  }
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

  displayRatingOptions = ()=> {
     const yourRating = this.props.movie.ratings.find((rating)=> rating.user.id === this.props.user.id)
      if (yourRating) {
        return this.displayEditDeleteRating(yourRating)
      } else {
        return this.displayCreateRatingBtn()
      }
  }

  handleClick = (e)=>{
    const name = e.target.className
    if(name === "create"){
      this.setState({displayRatingForm: true})
    }else if (name === "delete" ) {
      Api.deleteRating(this.props.movie.ratings.find((rating)=> rating.user.id === this.props.user.id).id)
      .then(movie => {
        this.props.showMovie(movie.movies)
      })
    }else if (name === "edit" ) {
      this.setState({displayRatingEditForm: true})
    }
  }


  displayEditDeleteRating = (rating)=>{
    return(
      <div>
        {this.state.displayRatingEditForm ? null :<p>Your Rating: {rating.amount}%</p>}
        <button className="delete" onClick={this.handleClick}>Delete Rating</button>
        <button className="edit" onClick={this.handleClick}>Edit Rating</button>
      </div>
    )
  }

  displayCreateRatingBtn = ()=>{
    // return <CreateRatingForm/>
    return <button className="create" onClick={this.handleClick}>Create Rating</button>
  }
  updateDisplayRatingForm = ()=>{
    this.setState({displayRatingForm: false})
  }

  updateDisplayEditRatingForm = ()=>{
    this.setState({displayRatingEditForm: false})
  }

  getUser = () =>{
    Api.getUser()
    .then(user => {
      console.log(user);
      this.props.fetchUser(user)
    })
  }
  componentDidMount(){
    localStorage.getItem("user") ? this.getUser() : this.props.fetchUser({})
  }
  render(){
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster_url} alt={this.props.movie.title} onError={this.handleNoImage}/>
        <p>Rating: {this.calculateRating()}</p>
        {this.props.user.id ? this.displayRatingOptions() : null}
        { this.state.displayRatingForm ? <CreateRatingForm updateDisplayRatingForm={this.updateDisplayRatingForm}/>: null}

        { this.state.displayRatingEditForm ? <EditRatingForm updateDisplayEditRatingForm={this.updateDisplayEditRatingForm} rating={this.props.movie.ratings.find((rating)=> rating.user.id === this.props.user.id)}/>: null}

        <p>Plot: {this.props.movie.plot}</p>
        <p>Country: {this.props.movie.country}</p>
        <p>Language: {this.props.movie.language}</p>
        <p>Rated: {this.props.movie.mpaa_rating}</p>
        <p>Producer: {this.props.movie.producer}</p>
        <p>Released Date: {this.props.movie.released_date}</p>
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
    movie: state.movie,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMovie: (movie) => {
      dispatch(showMovie(movie))
    },
    fetchUser: (user) => {
      dispatch(fetchUser(user))
    },
  }
}
// export default MovieShow;
export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
// showDate = () => {
  // console.log(this.props.movie.released_date);
  // const date = Date.parse(this.props.movie.released_date)
  // const newDate = new Date(date)
  // console.log(newDate.getMonth());
  // console.log(newDate.getDate());
  // console.log(newDate.getFullYear());
  // return this.props.movie.released_date;
// }
