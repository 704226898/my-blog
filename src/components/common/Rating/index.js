import React, { useState } from 'react';

import FullStar from '../../../asserts/images/fullStar.svg';
import EmptyStar from '../../../asserts/images/emptyStar.svg';
import '../../../styles/Common/RatingStarts/style.scss';
export default function RatingStars({ starNum, oneTimeClick }) {
  const [currentStarNum, setCurrentStarNum] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const hanldeStarClick = (index) => () => {
    if (currentStarNum !== index + 1 && !(isClicked && oneTimeClick)) {
      setCurrentStarNum(index + 1);
      setIsClicked(true);
    }

  }
  const renderStars = () => {
    let starDom = [];
    for (let i = 0; i < starNum; i++) {
      if (i < currentStarNum) {
        starDom.push(<img src={FullStar} alt='' onClick={hanldeStarClick(i)} />)
      }
      else {
        starDom.push(<img src={EmptyStar} alt='' onClick={hanldeStarClick(i)} />)
      }
    }
    return starDom;
  }
  return (
    <div className="rating-stars-container">
      {renderStars()}
    </div>
  );
}