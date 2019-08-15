import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setPage, incrementPage, decrementPage, firstPage, lastPage} from '../actions'

class PageButtons extends Component {

  generateButtons = () => {
    let buttons = []
    let pageStart = this.props.page <= 5 ? 1 : this.props.page - 5;
    let newPageCount = pageStart + 10 >= this.props.maxPages ? this.props.maxPages : pageStart + 10

    for (var i = pageStart; i <= newPageCount; i++) {
      if (i === this.props.page) {
        buttons.push(<button key={i} className="change_page" onClick={this.handleClick} id="active_button">{i}</button>)
      }else {
        buttons.push(<button key={i} className="change_page" onClick={this.handleClick}>{i}</button>)
      }
    }
    return buttons
  }

  handleClick = (e) =>{
    if (e.target.className === "change_page") {
      this.props.setPage(Number(e.target.textContent));
    }else if(e.target.className === "decrement_page"){
      this.props.decrementPage(this.props.page)
    }else if(e.target.className === "increment_page"){
      this.props.incrementPage(this.props.page)
    }else if(e.target.className === "first_page"){
      this.props.firstPage(1)
    }else if(e.target.className === "last_page"){
      this.props.lastPage(this.props.maxPages)
    }
  }

  render(){
    return (
      <div className="page_buttons">
        {this.props.page > 1 ? <button className="first_page" onClick={this.handleClick}>{"<<"}</button> : null }
          {this.props.page > 1 ? <button className="decrement_page" onClick={this.handleClick}>{"<"}</button> : null }
        {this.generateButtons()}
        {this.props.page !== this.props.maxPages ? <button className="increment_page" onClick={this.handleClick}>{">"}</button>: null }
        {this.props.page !== this.props.maxPages ? <button className="last_page" onClick={this.handleClick}>{">>"}</button>: null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    maxPages: state.maxPages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: (pageNumber) => {
      dispatch(setPage(pageNumber))
    },
    incrementPage: (pageNumber) => {
      dispatch(incrementPage(pageNumber))
    },
    decrementPage: (pageNumber) => {
      dispatch(decrementPage(pageNumber))
    },
    firstPage: (pageNumber) => {
      dispatch(firstPage(pageNumber))
    },
    lastPage: (pageNumber) => {
      dispatch(lastPage(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageButtons);
