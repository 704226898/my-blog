import React, { Component } from 'react';
import '../../../styles/AuthorNavBarMessage/AuthorNavBarMessage.css';
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
        {/* <img src={Avatar} alt=" " /> */}
        </div>
        <div className="author-navBar-message-main">
          <div className="my-name">郭亿鸿</div>
          <div className="my-profession">web开发工程师</div>
          </div>
      </div>
    );
  }
}

export default AuthorNavBarMessage;
