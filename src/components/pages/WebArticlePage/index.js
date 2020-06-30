import React, { Component } from 'react';
import '../../../styles/pages/WebNotePage/index.scss';
import Tag from '../../common/Tags';
import ArticleList from '../../common/ArticleList';
import ArticleContants from '../../../constants/ArticleContants';

import { connect } from 'mirrorx';

class WebArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { tags } = this.props;
    return (
      <div className="web-article-page-container">
        <div className="tag-list-container">
          <Tag tags={tags} type={ArticleContants.WEB_FRONT_END} />
        </div>
        <ArticleList type={ArticleContants.WEB_FRONT_END} />
      </div>
    );
  }
}


const WebArticlePageSmart = connect(state => {
  return {
    tags: state.app.tags,
  };
})(WebArticlePage);

export default WebArticlePageSmart;
