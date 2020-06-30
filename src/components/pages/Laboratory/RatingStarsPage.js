import React, { Component } from 'react';
import RatingStars from '../../common/Rating';


class RatingStarsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="laboratory-list-container">
         <RatingStars starNum={3}/>
      </div>
    );
  }
}


export default RatingStarsPage;
