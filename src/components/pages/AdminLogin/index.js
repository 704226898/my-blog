import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import '../../../styles/pages/AdminLogin/style.css';
import { actions, withRouter } from 'mirrorx';
import LoginContants from '../../../constants/LoginContants';
class AdminLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''

    }
  }

  handleCancelClick = () => {
    this.props.history && this.props.history.push('/home')
  }

  handleInputChange = (e) => {
    const target = e.target;
    const id = target && target.id;
    const value = target && target.value;
    if (id === "username") {
      this.setState({ username: value });
    }
    else if (id === "password") {
      this.setState({ password: value });
    }
  }

  handleLoginSubmit = () => {
    const { username, password } = this.state;


    if (username === '' || password === '') {
      console.log('do not null');
      return;
    }


    actions.app.login({ username, password }).then((response) => {
      console.log(response);

      const { code, user } = response.data;
      actions.app.updateLoginStatus(code);

      if (code === LoginContants.LOGIN_SUCCESS) {
        actions.app.updateCurrentUser(user);
      }

      this.props.history.push('/admin')

    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="admin-login-page">
        <div className="login-form-container">
          <Form>

            <TextField
              className="admin-login-username"
              value={username}
              id="username"
              onChange={this.handleInputChange}
              label="Username"
              variant="outlined"
            />

            <TextField
              id="password"
              label="Password"
              onChange={this.handleInputChange}
              value={password}
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />


            <Button outline onClick={this.handleLoginSubmit} color="primary" >Submit</Button>
            <Button outline onClick={this.handleCancelClick} >Cancel</Button>
          </Form>
        </div>
      </div>
    );
  }
}


export default withRouter(AdminLoginPage);
