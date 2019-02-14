import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Utils
import { handleUserInput } from '../../util/shared';

class UserPage extends Component {

  constructor(props){
    super(props);

    this.handleUserInput = handleUserInput.bind(this);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />

          <label htmlFor="pwd">Password</label>
          <Field name="pwd" component="input" type="password" />

          <label htmlFor="userName">User Name</label>
          <Field name="userName" component="input" type="text" />

          <label htmlFor="permission">Permission</label>
          <Field name="permission" component="input" type="text" />

          <button type="button" className="btn btn-outline-primary "><FontAwesomeIcon icon="plus" /></button>
        </div>
        </form>
      </div>
    );
  }

  handleSubmit(){
    console.log('Fired');
  }
}

const mapStateToProps = function(state) {
  return {
    
  }
}

UserPage = reduxForm({
  form: 'userForm'
})(UserPage);

export default connect(mapStateToProps)(withRouter(UserPage));
