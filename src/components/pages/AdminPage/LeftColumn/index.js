import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, withRouter } from 'mirrorx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import '../../../../styles/AdminPage/LeftColumn/index.scss';
import { AdminRouteConfig } from '../../../../constants/AdminRouteConfig';
class LeftColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav: AdminRouteConfig[0].text
    }
  }

  hanldeNavClick = (route) => () => {
    this.setState({ currentNav: route.text });
    const { history } = this.props;
    history && history.push(route.path);
  }

  render() {
    const { currentNav } = this.state;
    const { isNavOpen, logOutFuc, currentUser} = this.props;


    if (!isNavOpen) {
      return null
    }



    return (
      <div className="admin-left-column-container">
        <ListItem className="left-column-user-message"> <ListItemText primary={`Hi! ${currentUser.username}`} /></ListItem>
        {AdminRouteConfig.map((route, index) => (
          <ListItem key={index} button onClick={this.hanldeNavClick(route)} selected={route.text === currentNav}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>))}

        <ListItem button className="left-column-log-out" onClick={logOutFuc}>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary={'Log Out'} />
        </ListItem>
      </div>
    );
  }
}
LeftColumn.propTypes = {
  history: PropTypes.object,
  isNavOpen: PropTypes.bool,
  logOutFuc:PropTypes.func
};

const LeftColumnSmart = connect(state => {
  return {
    currentUser: state.app.currentUser
  };
})(LeftColumn);

export default withRouter(LeftColumnSmart);
