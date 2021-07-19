import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'mirrorx';

import { AdminRouteContants } from '../../../constants/AdminRouteConfig';
import AddArticlePage from './ArticleManagePage/AddArticlePage';
import ArticleManagerPage from './ArticleManagePage/ArticleManagerPage';
import UserManagerPage from './UserManagePage/UserManagerPage';


class CenterColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Switch>
          <Route path={AdminRouteContants.ADMIN} exact component={ArticleManagerPage}></Route>
          <Route path={AdminRouteContants.ADMIN_ARTICLES} exact component={ArticleManagerPage}></Route>
          <Route path={AdminRouteContants.ADMIN_CREATE_ARTICLES} exact component={AddArticlePage}></Route>    
          <Route path={AdminRouteContants.ADMIN_USERS} exact component={UserManagerPage}></Route>
          <Route path={AdminRouteContants.ADMIN_CREATE_USERS} exact component={AddArticlePage}></Route>    
        </Switch>
    );
  }
}
CenterColumn.propTypes = {
  history: PropTypes.object,
};


export default CenterColumn;
