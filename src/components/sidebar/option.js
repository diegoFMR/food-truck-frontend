//Libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSS } from '../../util/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Option extends Component{

  render(){

    const { label, url, location, history, icon } = this.props;

    return(
      <div 
        className={`nav-item ${location.pathname === url ? CSS.SELECTED: ``}`} 
        onClick={()=>history.push(url)}>
          <div className="nav-link" > {icon ? <FontAwesomeIcon icons={icon} /> : label} { label }  </div>
      </div>
    )
  }

}

export default withRouter(Option);

