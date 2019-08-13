import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import {connect} from 'react-redux'
import { logoutUser} from '../actions'
import { withRouter } from "react-router";

class Navbar extends Component {

  displayLoginOptions = () =>{
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }

  handleLogout = () =>{
    localStorage.removeItem("user")
    this.props.logoutUser()
    this.props.history.push("/movies/all")
  }

  displayLogOutOption = () =>{
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

  render(){
    return (
      <div>
        <Search />
        <span>Movie(DROP MENU)</span>
        {localStorage.getItem("user") ? this.displayLogOutOption() : this.displayLoginOptions()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    },
  }
}

// export default Navbar;
export default withRouter(connect(null, mapDispatchToProps)(Navbar));
