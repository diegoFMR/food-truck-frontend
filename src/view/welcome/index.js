import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome_page">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withRouter(Welcome);
