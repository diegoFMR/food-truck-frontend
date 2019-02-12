import React, { Component } from 'react';
import './App.css';
//Components
import Bar from './components/sidebar';
import Welcome from './view/welcome';
import TruckPage from './view/truck';
//Libraries
import { Route, withRouter  } from 'react-router-dom';

//Utils
import { URL } from './util/constants';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Bar/>
        <Route path={URL.HOME} exact component={Welcome} />
        <Route path={URL.TRUCK} exact component={TruckPage} />
      </div>
    );
  }
}

export default withRouter(App);
