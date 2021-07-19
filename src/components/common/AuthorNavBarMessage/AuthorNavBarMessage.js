import React, { Component } from 'react';
import '../../../styles/AuthorNavBarMessage/AuthorNavBarMessage.scss';
import Avatar from '../../../asserts/images/avatar.jpg';
class AuthorNavBarMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="author-navBar-message-container">
        <div className="author-navBar-message-avatar">
        <img src={Avatar} alt=" " />
        </div>
        <div className="author-navBar-message-main">
          <div className="my-name">admin</div>
          <div className="my-profession">web</div>
          </div>
      </div>
    );
  }
}

export default AuthorNavBarMessage;
