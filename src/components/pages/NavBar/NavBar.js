import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, withRouter } from 'mirrorx';
import { RouteConfig } from '../../../constants/RouteConfig';

import '../../../styles/NavBar/NavBar.css';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  handleNavItemClick = (path) => () => {
    const { history, onNavBarItemClick } = this.props;
    history && history.push(path);
    onNavBarItemClick && onNavBarItemClick();
  }


  renderNavItem = (route, key) => {
    return (
      <div className="nav-item" key={key} onClick={this.handleNavItemClick(route.path)}>
        <div className="nav-item-name">{route.text}</div> </div>
    )
  }



  render() {
    return (
      <div className="nav-bar-container">
        {RouteConfig.map((route, index) => this.renderNavItem(route, index))}
      </div>

    );
  }
}
NavBar.propTypes = {
  history: PropTypes.object,
  onNavBarItemClick: PropTypes.func
};

const NavBarSmart = connect(state => {
  return {
    user: state.app.user
  };
})(NavBar);

export default withRouter(NavBarSmart);
