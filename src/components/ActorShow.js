import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
// import no_poster from '../no_poster.png';

class ActorShow extends Component {
  // handleNoImage = (error) =>{
  //   error.target.src = no_poster
  // }

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
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  showDate = () => {
    // console.log(this.props.actor.released_date);
    // const date = Date.parse(this.props.actor.released_date)
    // const newDate = new Date(date)
    // console.log(newDate.getMonth());
    // console.log(newDate.getDate());
    // console.log(newDate.getFullYear());
      return this.props.actor;
  }

  render(){
    return (
      <div>
        <h2>{this.props.actor.actor.name}</h2>
        <h3>Movies</h3>
        <ul>
          {this.generateListItems(this.props.actor.movies,"movies")}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    actor: state.actor
  }
}
// export default ActorShow;
export default connect(mapStateToProps, null)(ActorShow);
