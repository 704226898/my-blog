import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import RatingStars from '../../common/Rating';

import '../../../styles/Laboratory/style.scss';

const Laboratory = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="laboratory-container">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
             <RatingStars starNum={3}/>
          </CardBody>
        </Card>
      </Collapse>

      <div contenteditable="true"></div>
    </div>
  );
}

export default Laboratory;