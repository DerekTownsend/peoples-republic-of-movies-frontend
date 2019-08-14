import React, { Component } from 'react';
import {connect} from 'react-redux'
import { showMovie} from '../actions'
import Api from '../services/api';

class CreateRatingForm extends Component {
  state = {
    amount: 0
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const bodyObj = {
      rating:{
        amount: this.state.amount,
        user_id: this.props.user.id,
        movie_id: this.props.movie.id
      }
    }
    Api.rateMovie(bodyObj)
    .then(movie => {
      this.props.showMovie(movie.movies)
      this.props.updateDisplayRatingForm()
    })

  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="amount">Rating Amount: </label>
        <input onChange={this.handleChange} name="amount" id="amount" type="number" step=".1" min="0" max="100" value={this.state.amount}/>%
        <input type="submit"/>
      </form>
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
  }
}
// export default CreateRatingForm;
export default connect(mapStateToProps, mapDispatchToProps)(CreateRatingForm);
