import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { fetchUser} from '../actions'
import Api from '../services/api';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(this.state);
    const bodyObj = {
      user: this.state
    }
    Api.fetchUser(bodyObj)
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
      <div className="login_div">
      {localStorage.getItem("user") ? <Redirect to="/movies/all"/> : null}
        <h2>Login</h2>
        <form className="login" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} id="username" name="username" value={this.state.username}/>
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password}/>
          <input type="submit" value="Login"/>
          <p>Dont have an account? <Link to="/register">Register</Link></p>
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

export default connect(null, mapDispatchToProps)(Login);
