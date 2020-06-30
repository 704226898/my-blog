import React, { Component } from 'react';
import '../../../styles/ArticleDetails/index.css';
import PropTypes from 'prop-types';
import { actions, withRouter } from 'mirrorx';
class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 0),
      article: {}
    }
  }

  componentDidMount() {
    const { id } = this.state;
    actions.app.getArticleById(id).then((respose) => {
      this.setState({ article: respose.data[0] })
    })
  }

  render() {
    const { article } = this.state;
    return (
      <div className="article-details-container">
        <div className="article-details-header">
          <div className="article-details-title">
            {article && article.title}
          </div>
        </div>
        <div className="article-details-some-message">
          <div className="article-details-tag">{article && article.tag}</div>
          <div className="article-details-create-time">{article && article.create_date}</div>

        </div>
        <div className="article-details-main">
          <div className="article-details-content">{article && article.content}</div>


        </div>

      </div>
    );
  }
}

ArticleDetails.propTypes = {
  article: PropTypes.object,

};

export default withRouter(ArticleDetails);
