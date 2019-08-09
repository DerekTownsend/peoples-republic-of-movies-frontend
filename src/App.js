import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import MoviesContainer from './containers/MoviesContainer'
import MovieShowContainer from './containers/MovieShowContainer'
import Navbar from './components/Navbar'
import Api from './services/api';
import {fetchMovies, setPageMax} from './actions'

// import Api from './services/api';
// {console.log(this.props.fetchMovies("yote"))}
// {console.log(this.props)}

class App extends Component {

  fetchMovies = () => {
    Api.fetchMovies(this.props.page)
    .then(movies => {
      this.props.setPageMax(Math.ceil(movies.total/24))
      this.props.fetchMovies(movies.movies)
    })
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="App">
        <h1>People's Republic of Movies</h1>
        {this.fetchMovies()}
        <Navbar />
        <Switch>
          <Route exact path='/' component={MoviesContainer}/>
          <Route exact path='/movies/all' component={MoviesContainer}/>
          <Route exact path='/movies/:id' component={MovieShowContainer}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (movies) => {
      dispatch(fetchMovies(movies))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from 'react';
//
// class Movie extends Component {
//   render(){
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
