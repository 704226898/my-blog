import React, { Component } from 'react';


import RichEditor from '../../../common/RichEditor';

import { withRouter } from 'mirrorx';


class AddArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="admin-add-article">
     
        <RichEditor/>
      </div>
    );
  }
}

AddArticlePage.propTypes = {
 
};




export default withRouter(AddArticlePage);
