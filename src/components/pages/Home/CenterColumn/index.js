import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'mirrorx';
import WebArticlePage from '../../WebArticlePage';
import LifeArticlePage from '../../LifeArticlePage';
import ArticleDetails from '../../../common/ArticleDetails';
import Laboratory from '../../Laboratory';

class CenterColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Switch>
          <Route path={'/home/'} exact component={WebArticlePage}></Route>
          <Route path={'/home/webFrontEndActicles'} exact component={WebArticlePage}></Route>
          <Route path={'/home/lifeArticles'} exact component={LifeArticlePage}></Route>
          <Route path={'/home/article/:id'} exact component={ArticleDetails}></Route>
          <Route path={'/home/laboratory'} exact component={Laboratory}></Route>

          
        </Switch>
    );
  }
}
CenterColumn.propTypes = {
  history: PropTypes.object,
};


export default CenterColumn;
