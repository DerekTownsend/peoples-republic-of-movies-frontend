import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer'
import MovieShowContainer from './containers/MovieShowContainer'
import MovieSearchContainer from './containers/MovieSearchContainer'
import Navbar from './components/Navbar'

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>People's Republic of Movies</h1>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MoviesContainer}/>
          <Route exact path='/movies/all' component={MoviesContainer}/>
          <Route exact path='/movies/search/:term/:page' component={MovieSearchContainer}/>
          <Route exact path='/movies/:id' component={MovieShowContainer}/>
        </Switch>
      </div>
    )
  }
}



export default App;

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
