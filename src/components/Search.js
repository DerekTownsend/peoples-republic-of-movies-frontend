import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
// import Search from './Search'
import { fetchMovies, setPageMax, setPage } from '../actions'
import { withRouter } from "react-router";


class Search extends Component {
  state = {
    term: ""
  }
  handleChange = (e) =>{
    const character = e.target.value
    if (!character.includes("/") && !character.includes("%")) {
      this.setState({
        [e.target.name]: character
      })
    }else{
      alert("Please no '/'  or '%'")
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(this.props);
    // console.log("",this.state.term.value);
    if (this.state.term !==  "" && this.state.term !== " " ) {
      this.props.setPage(1)
      // console.log(this.props);
      Api.searchMovies({term: this.state.term, page: this.props.page})
      .then( movies => {
        this.props.fetchMovies(movies.movies)
        this.props.setPageMax(Math.ceil(movies.total/24))
        this.props.history.push(`/movies/search/${this.state.term}/1`)
      })
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <input onChange={this.handleChange} name="term" value={this.state.term} placeholder="Search by Movie Title" id="search_input"/>
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (movies) => {
      dispatch(fetchMovies(movies))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    },
    setPage: (pageNumber) => {
      dispatch(setPage(pageNumber))
    },
  }
}

// export default Search;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
