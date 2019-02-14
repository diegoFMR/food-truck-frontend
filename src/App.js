//Libraries
import { Route, withRouter  } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
//Components
import Bar from './components/sidebar';
import Welcome from './view/welcome';
import TruckPage from './view/truck';
import UserPage from './view/user';

//Utils
import { URL } from './util/constants';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faPlus, faUsers)

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Bar/>
        <Route path={URL.HOME} exact component={Welcome} />
        <Route path={URL.TRUCK} exact component={TruckPage} />
        <Route path={URL.USERS} exact component={UserPage} />
      </div>
    );
  }
}

export default withRouter(App);
