import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import { showGenre, setPageMax, fetchMovies } from '../actions'
import GenreShow from '../components/GenreShow'

class GenreShowContainer extends Component {
  fetchGenre = (id) =>{
    Api.fetchGenre(id, this.props.page)
    .then(genre => {
      // console.log(genre);
      this.props.showGenre(genre.genre)
      this.props.fetchMovies(genre.movies.movies)
      this.props.setPageMax(Math.ceil(genre.movies.total/24))

    })
  }


  getGenre = () => {
    const id =this.props.match.params.id
    if (Number(id)) {
      this.fetchGenre(id)
    } else{
      this.props.history.push("/movies/all")
    }
  }

  componentDidMount(){

  }
  render(){
    return (
      <div>
        {this.getGenre()}
        <GenreShow/>
      </div>
    )
  }
}
//         {this.props.genre.id ? <GenreShow/> : null}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showGenre: (genre) => {
      dispatch(showGenre(genre))
    },
    fetchMovies: (movies) => {
      dispatch(fetchMovies(movies))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    },
  }
}
// export default GenreShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(GenreShowContainer);
