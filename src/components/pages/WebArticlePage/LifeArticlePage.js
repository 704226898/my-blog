import React, { Component } from 'react';
import '../../../styles/pages/WebNotePage/WebNotePage.scss';
import ArticleList from '../../common/ArticleList';
import Tag from '../../common/Tags';
import ArticleContants from '../../../constants/ArticleContants';
import { connect } from 'mirrorx';


class LifeArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="life-article-page-container">
        <div className="tag-list-container">
          <Tag tags={tags} type={ArticleContants.LIFE}/>
        </div>
        <ArticleList type={ArticleContants.LIFE} />
      </div>
    );
  }
}

const LifeArticlePageSmart = connect(state => {
  return {
    tags: state.app.tags,
  };
})(LifeArticlePage);

export default LifeArticlePageSmart;
