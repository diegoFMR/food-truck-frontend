//Libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSS } from '../../util/constants';


class Option extends Component{

  render(){

    const { label, url, location, history } = this.props;

    return(
      <div 
        className={`nav-item ${location.pathname === url ? CSS.SELECTED: ``}`} 
        onClick={()=>history.push(url)}>
          <div className="nav-link" > { label }  </div>
      </div>
    )
  }

}

export default withRouter(Option);

