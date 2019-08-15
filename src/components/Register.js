import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchUser} from '../actions'
import Api from '../services/api';
import { Link, Redirect} from 'react-router-dom';

class Register extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const bodyObj = {
      user: this.state
    }
    Api.createUser(bodyObj)
    .then(user => {
      if (!user['error']) {
        this.props.fetchUser(user.user)
        localStorage.setItem('user', user.jwt)
        this.props.history.push("/movies/all")
      }else{
        alert(user.error);
      }

    })

  }

  render(){
    return (
      <div className="register_div">
        {localStorage.getItem("user") ? <Redirect to="/movies/all"/> : null}
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit} className="register">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} id="username" name="username" value={this.state.username}/>

          <label htmlFor="firstname">First Name</label>
          <input onChange={this.handleChange} id="firstname" name="firstname" value={this.state.firstname}/>
          <label htmlFor="lastname">Last Name</label>
          <input onChange={this.handleChange} id="lastname" name="lastname" value={this.state.lastname}/>

          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} id="email" name="email" value={this.state.email}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} id="password" name="password" value={this.state.password}/>
          <input  type="submit" value="Register"/>

          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => {
      dispatch(fetchUser(user))
    },
  }
}

export default connect(null, mapDispatchToProps)(Register);
