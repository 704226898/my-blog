import React, { Component } from 'react';
import Home from './components/pages/Home/Home';

import './models';
import './styles/App.css';
import mirror from 'mirrorx';
import AdminLoginPage from './components/pages/AdminLogin';
import LoginContants from './constants/LoginContants';
import AdminPage from './components/pages/AdminPage';
let { withRouter, Switch, Route, connect, Redirect } = mirror;
class App extends Component {
  render() {
    const { login_status } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route path='/home' component={Home} />

          <Route path={'/login'} exact component={AdminLoginPage}></Route>

          <Route path={'/admin'}  component={login_status === LoginContants.LOGIN_SUCCESS ? AdminPage : Home}></Route>
          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
const Root = withRouter(
  connect((state) => {
    return state.app;
  })(App));
export default Root;