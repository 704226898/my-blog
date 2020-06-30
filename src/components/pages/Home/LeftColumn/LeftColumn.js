import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'mirrorx';
import '../../../../styles/LeftColumn/LeftColumn.css';
import AuthorNavBarMessage from '../../../common/AuthorNavBarMessage';
import NavBar from '../../NavBar/NavBar';
class LeftColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="left-column-container">
         <AuthorNavBarMessage/>
        <NavBar/>
      </div>
    );
  }
}
LeftColumn.propTypes = {
  history: PropTypes.object,
};

const LeftColumnSmart = connect(state => {
  return {
    user: state.app.user
  };
})(LeftColumn);

export default LeftColumnSmart;
