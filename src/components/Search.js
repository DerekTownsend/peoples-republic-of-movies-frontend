import React, { Component } from 'react';
// import Search from './Search'

class Search extends Component {
  state = {
    term: ""
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(this.state.term);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="term" value={this.state.term}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default Search;
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
