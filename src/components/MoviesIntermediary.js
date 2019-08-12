import React, { Component } from 'react';
import {connect} from 'react-redux'
import Movie from '../components/Movie';

class MoviesIntermediary extends Component {
  displayMovies = () => {
    // console.log(this.props);
    return this.props.movies.map((movie) => {
      return <Movie movie={movie} key={movie.id}/>
    })
  }
  // {console.log(this.props)}
  render(){
    return (
      <div>
        <div className="movies">
          {this.props.movies && this.props.movies.length !==0 ? this.displayMovies() : <h2>No Movies Found</h2>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}
  export default connect(mapStateToProps)(MoviesIntermediary);

  // <button onClick={this.handleClick}>{this.props.page}</button>
  // connect(mapStateToProps, mapDispatchToProps)()
