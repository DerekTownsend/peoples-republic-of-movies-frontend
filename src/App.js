import React, { Component } from 'react';
import './css/App.css';
import './css/Form.css';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import MoviesContainer from './containers/MoviesContainer'
import MovieShowContainer from './containers/MovieShowContainer'
import MovieSearchContainer from './containers/MovieSearchContainer'
import ActorShowContainer from './containers/ActorShowContainer'
import GenreShowContainer from './containers/GenreShowContainer'
import ProfileContainer from './containers/ProfileContainer'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Api from './services/api';
import { fetchUser} from './actions'

class App extends Component {

  getUser = () =>{
    Api.getUser()
    .then(user => {
      console.log(user);
      this.props.fetchUser(user)
    })
  }

  render(){
    return (
      <div className="container">
      {localStorage.getItem("user") ? this.getUser() : this.props.fetchUser({})}
        <Navbar />
        <Switch>
          <Route exact path='/' component={MoviesContainer}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/profile' component={ProfileContainer}/>
          <Route exact path='/profile/:type' component={ProfileContainer}/>
          <Route exact path='/movies/all' component={MoviesContainer}/>
          <Route exact path='/movies/search/:term/:page' component={MovieSearchContainer}/>
          <Route exact path='/movies/:id' component={MovieShowContainer}/>
          <Route exact path='/actors/:id' component={ActorShowContainer}/>
          <Route exact path='/genres/:id' component={GenreShowContainer}/>
        </Switch>
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

// export default App;
export default connect(null, mapDispatchToProps)(App);
// import React, { Component } from 'react';
// // import {connect} from 'react-redux'
//
// class App extends Component {
//   render(){
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
//
// // const mapStateToProps = (state) => {
// //   return {
// //     movie: state.movie
// //   }
// // }
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     fetchMovies: (movies) => {
// //       dispatch(fetchMovies(movies))
// //     },
// //     setPageMax: (pageNumber) => {
// //       dispatch(setPageMax(pageNumber))
// //     }
// //   }
// // }
// export default App;
// // export default connect(mapStateToProps, mapDispatchToProps)(App);
