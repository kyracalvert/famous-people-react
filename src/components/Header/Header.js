import React, { Component } from 'react';
// { Component } is called destructuring

class Header extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Famous People</h1>
          </header>
        </div>
      );
    }
  }

export default Header;