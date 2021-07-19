import React, { Component } from 'react';
import AdminPageLeftColumn from './AdminPageLeftColumn';
import AdminPageContants from '../../../constants/AdminPageContants';
import '../../../styles/AdminPage/index.scss';
import AdminPageCenterColumn from './AdminPageCenterColumn';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { actions, withRouter, connect } from 'mirrorx';
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false,
      dropdownIcon: null,
      isNavOpen: true
    }
  }

  handleNavIconClick = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


  handleLogOut = () => {
    this.props.history.replace('/')
    actions.app.updateLoginStatus('');

  }

  handleDropDownMenuIconClick = (e) => {
    this.setState({
      isDropDownOpen: true,
      dropdownIcon: e.target
    })
  }

  handleDropDownMenuClose = () => {
    this.setState({
      isDropDownOpen: false
    })
  }

  render() {
    const { isDropDownOpen, dropdownIcon, isNavOpen } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="admin-page-container">
        <div className="admin-page-topbar">
          <div className="top-bar-text"> {AdminPageContants.ADMIN_CONSOLE} </div>
          <div className="top-bar-message">
            <DehazeIcon className="dropdown-menu-icon-small" onClick={this.handleNavIconClick} />
            <div className="top-bar-user-message">{`Hi! ${currentUser.username}`}</div>
            <DehazeIcon className="dropdown-menu-icon" aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleDropDownMenuIconClick} />
            <Menu
              id="simple-menu"
              anchorEl={dropdownIcon}
              keepMounted
              open={isDropDownOpen}
              onClose={this.handleDropDownMenuClose}
            >
              <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>


        </div>
        <AdminPageLeftColumn isNavOpen={isNavOpen} logOutFuc={this.handleLogOut} />
        <div className="center-column-container">
          <AdminPageCenterColumn />
        </div>

      </div>
    );
  }
}


const AdminPageSmart = connect(state => {
  return {
    currentUser: state.app.currentUser,
  };
})(AdminPage);
export default withRouter(AdminPageSmart);
