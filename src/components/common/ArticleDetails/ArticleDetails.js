import React, { Component } from 'react';
import '../../../styles/ArticleDetails/ArticleDetails.scss';
import PropTypes from 'prop-types';
import { connect, withRouter } from 'mirrorx';
class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 0),
     
    }
  }



  render() {
    const { currentArticle } = this.props;
    return (
      <div className="article-details-container">
        <div className="article-details-header">
          <div className="article-details-title">
            {currentArticle && currentArticle.title}
          </div>
        </div>
        <div className="article-details-some-message">
          <div className="article-details-tag">{currentArticle && currentArticle.tag}</div>
          <div className="article-details-create-time">{currentArticle && currentArticle.create_date}</div>

        </div>
        <div className="article-details-main">
          <div className="article-details-content"  dangerouslySetInnerHTML={{__html:currentArticle.content}}></div>
        </div>

      </div>
    );
  }
}

ArticleDetails.propTypes = {
  article: PropTypes.object,

};
const ArticleDetailsSmart = connect(state => {
  return {
    currentArticle: state.app.currentArticle,
  };
})(ArticleDetails);
export default withRouter(ArticleDetailsSmart);
