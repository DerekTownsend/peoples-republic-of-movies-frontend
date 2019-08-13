import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showActor} from '../actions'
import ActorShow from '../components/ActorShow'

class ActorShowContainer extends Component {
  fetchActor = (id) =>{
    Api.fetchActor(id)
    .then(actor => {
      // console.log(actor);
      this.props.showActor(actor)
    })
  }


  getActor = () => {
    const id =this.props.match.params.id
    if (Number(id)) {
      this.fetchActor(id)
    } else{
      this.props.history.push("/movies/all")
    }
  }

  componentDidMount(){
    this.getActor()
  }
  render(){
    return (
      <div>
        {this.props.actor.actor ? <ActorShow/> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    actor: state.actor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showActor: (actor) => {
      dispatch(showActor(actor))
    }
  }
}
// export default ActorShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ActorShowContainer);
