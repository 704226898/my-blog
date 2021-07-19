import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import {  withRouter } from 'mirrorx';
import '../../../styles/TopBar/LeftColumn.css';
import AuthorNavBarMessage from '../AuthorNavBarMessage/AuthorNavBarMessage';
import NavBar from '../../pages/NavBar/NavBar';
import TopBarContants from '../../../constants/TopBarContants';
class LeftColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleAdminLogin=()=>{
    this.props.history.push('/login');
  }

  render() {
    const { onNavBarItemClick } = this.props;
    return (
      <div className="top-bar-left-column-container">
        <AuthorNavBarMessage />
        <div className="left-column-login">
          <Button color='primary' onClick={this.handleAdminLogin} className="left-column-login-button">
            {TopBarContants.loginText}
          </Button>
        </div>
        <NavBar onNavBarItemClick={onNavBarItemClick} />
      </div>
    );
  }
}
LeftColumn.propTypes = {
  history: PropTypes.object,
  onNavBarItemClick: PropTypes.func
};



export default withRouter(LeftColumn);
