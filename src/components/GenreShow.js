import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import PageButtons from './PageButtons';
import MoviesIntermediary from './MoviesIntermediary';

class GenreShow extends Component {
  // handleNoImage = (error) =>{
  //   error.target.src = no_poster
  // }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  generateListItems = (items, type=null) =>{
    if (type) {
      return items.map((item)=>{
        return <li key={item.id}><Link to={`/${type}/${item.id}`}>{item.title}</Link></li>
      })
    }else {
      return items.split(",").map((item, index)=>{
        return <li key={index}>{item}</li>
      })
    }
  }

  showDate = () => {
    // console.log(this.props.genre.released_date);
    // const date = Date.parse(this.props.genre.released_date)
    // const newDate = new Date(date)
    // console.log(newDate.getMonth());
    // console.log(newDate.getDate());
    // console.log(newDate.getFullYear());
      return this.props.genre;
  }

  render(){
    return (
      <div>
        <h2>{this.props.genre.name}</h2>
        <h3>Movies</h3>
        <PageButtons/>
        <MoviesIntermediary/>
        <PageButtons/>
      </div>
    )
  }
}
// {this.generateListItems(this.props.genre.movies,"movies")}
const mapStateToProps = (state) => {
  return {
    genre: state.genre
  }
}
// export default GenreShow;
export default connect(mapStateToProps, null)(GenreShow);
