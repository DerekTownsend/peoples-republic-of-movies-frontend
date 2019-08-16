import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import {connect} from 'react-redux'
import { logoutUser} from '../actions'
import { withRouter } from "react-router";
import Logo from '../images/logo_prm.png';

class Navbar extends Component {
  state = {
    showNav: false
  }
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
        <Link to="/profile">Profile</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
  displayNav = () =>{
    this.setState({showNav: !this.state.showNav})
  }
  render(){
    return (
      <div className="navbar">
      <img src={Logo} alt="logo"/>
        <h1>People's Republic of Movies</h1><br/>
        <div className={this.state.showNav ? "main" : "main responsive"}>
          <Search />
          <Link to="/movies/all">All Movies</Link>
          {localStorage.getItem("user") ? this.displayLogOutOption() : this.displayLoginOptions()}
        </div>
        <button className="mobile_buttton"onClick={this.displayNav}>&#9776;</button>
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
