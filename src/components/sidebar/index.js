import React, { Component } from 'react';
//Components
import Option from './option';
//Libraries
import { withRouter  } from 'react-router-dom';
//Util
import { URL } from '../../util/constants';

class Bar extends Component {

  render(){
    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">   
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Option url={URL.HOME} label="HOME" />
            <Option url={URL.TRUCK} label="TRUCKS" />
          </ul>
        </div>
      </nav>
    </div>
  )
  }
}

export default withRouter(Bar);