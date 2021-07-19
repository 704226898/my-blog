import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, withRouter, actions } from 'mirrorx';
import '../../../styles/TopBar/TopBar.scss';
import { Button, UncontrolledTooltip } from 'reactstrap';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import TopBarContants from '../../../constants/TopBarContants';
import LeftColumn from './LeftColumn';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLeftColumn: false
    }
    this.handleChangeStyleIconClick = this.handleChangeStyleIconClick.bind(this);
  }

  handleAdminLogin = () => {
    this.props.history.push('/login');
  }

  handleNavIconClick = () => {
    this.setState({ isShowLeftColumn: !this.state.isShowLeftColumn });
  }

  handleChangeStyleIconClick = () => {
    actions.app.changeSystemStyle();
  }
  render() {
    const { systemStyle } = this.props;
    const { isShowLeftColumn } = this.state;
    return (
      <div className="top-bar-container">
        <div className="top-bar-left">
          <div className="top-bar-nav-icon" onClick={this.handleNavIconClick} >

          </div>
          <div className="top-bar-title">
            {TopBarContants.welcomeTitle}
          </div>

        </div>

        <div className="top-bar-right">
          <WbIncandescentIcon id="changeStyleIcon" onClick={this.handleChangeStyleIconClick} />
          <UncontrolledTooltip target="changeStyleIcon">{systemStyle === 'light' ? '夜间模式' : '关闭夜间模式'}</UncontrolledTooltip>
          <Button color='primary' onClick={this.handleAdminLogin} className="top-bar-login">
            {TopBarContants.loginText}
          </Button>
        </div>
        {isShowLeftColumn && <LeftColumn onNavBarItemClick={this.handleNavIconClick} />}
      </div>
    );
  }
}
TopBar.propTypes = {
  history: PropTypes.object,
};

const TopBarSmart = connect(state => {
  return {
    systemStyle: state.app.systemStyle
  };
})(TopBar);

export default withRouter(TopBarSmart);
