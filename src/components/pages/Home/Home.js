import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'mirrorx';
import '../../../styles/Home/Home.css';
import CenterColumn from './HomeCenterColumn';
import LeftColumn from './LeftColumn';
import TopBar from '../../common/TopBar/TopBar';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="home-page-container">
        <TopBar />
        <div className="home-page-main">
          <LeftColumn />
          <div className="center-column-container">
            <CenterColumn />
          </div>

        </div>
      </div>
    );
  }
}
Home.propTypes = {
  history: PropTypes.object,
};

const HomeSmart = connect(state => {
  return {
    user: state.app.user
  };
})(Home);

export default HomeSmart;
