import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

//Utils
import { handleUserInput } from '../../util/shared';

class UserPage extends Component {

  constructor(props){
    super(props);

    this.handleUserInput = handleUserInput.bind(this);
    
  }

  render() {
    return (
      <div className="user_page">
        <form onSubmit={this.handleSubmit} id='template-mail'>
          
          <div className="form-group" >
          { formErrors.name === true ? <div><p className="invalid-input">Name is required!</p></div>: null }
            <label>Template Name</label>
            <input className="form-control" name="name" onChange={(event) => this.handleUserInput(event, this)} autoFocus />
            
          </div>
          <div className="form-group" >
          { formErrors.from_name === true ? <div><p className="invalid-input">Field is required!</p></div>: null }  
            <label>From name</label>
            <input className="form-control" name="from_name" onChange={(event) => this.handleUserInput(event, this)} value={ this.state.from_name } />
            
          </div>
          <div className="form-group" >
          
          <label>From name Line 2 (optional)</label>
          <input className="form-control" name="from_name2" onChange={(event) => this.handleUserInput(event, this)} value={ this.state.from_name2 } />
          
        </div>
        <div className="form-group" >
        { formErrors.from_street_address === true ? <div><p className="invalid-input">Field is required!</p></div>: null }  
          <label>From Address (Return Mail Address)</label>
          <input className="form-control" name="from_street_address" onChange={(event) => this.handleUserInput(event, this)} value={ this.state.from_street_address } />
          
        </div>
          <div className="form-group">
            <div className="checkbox-label">
              <label className="form-check-label">
                <input className="form-check-input" name="use_mailhouse_return_address" type="checkbox" value={this.state.use_mailhouse_return_address} htmlFor="use_mailhouse_return_address" onChange={(event) => this.handleUserInputCheckbox(event, this)} />
                <span className="m-2">Select Option to Use Mail house's return return address</span>
            </label>
            </div>
          </div>             
        </form>
      </div>
    );
  }
}

export default withRouter(UserPage);
