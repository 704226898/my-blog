import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, withRouter } from 'mirrorx';
import '../../../styles/TopBar/TopBar.css';
import {Button} from 'reactstrap';
import TopBarContants from '../../../constants/TopBarContants';
import LeftColumn from './LeftColumn';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLeftColumn: false
    }
  }

  handleAdminLogin=()=>{
    this.props.history.push('/login');
  }

  handleNavIconClick = () =>{
    this.setState({isShowLeftColumn: !this.state.isShowLeftColumn});
  }


  render() {
    const {isShowLeftColumn} =this.state;
    return (
      <div className="top-bar-container">
        <div className="top-bar-left">
          <div className="top-bar-nav-icon"  onClick={this.handleNavIconClick} >

          </div>
          <div className="top-bar-title">
            {TopBarContants.welcomeTitle}
          </div>

        </div>

        <div className="top-bar-right">
          <Button  color='primary'  onClick={this.handleAdminLogin}      className="top-bar-login">
            {TopBarContants.loginText}
          </Button>
        </div>
      {isShowLeftColumn &&  <LeftColumn onNavBarItemClick={this.handleNavIconClick}/>}
      </div>
    );
  }
}
TopBar.propTypes = {
  history: PropTypes.object,
};

const TopBarSmart = connect(state => {
  return {
    // user: state.app.user
  };
})(TopBar);

export default withRouter(TopBarSmart);
