import React, { Component } from 'react';
import Search from './Search'

class Navbar extends Component {
  render(){
    return (
      <div>
        <Search />
        <span>Movie</span>

      </div>
    )
  }
}

export default Navbar;
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
