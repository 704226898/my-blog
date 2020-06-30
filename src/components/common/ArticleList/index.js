import React, { Component } from 'react';
import '../../../styles/ArticleList/index.css';
import PropTypes from 'prop-types';
import { withRouter, actions, connect } from 'mirrorx';
import { getTagsFromArticleList } from '../../../utils/articleUtils';




class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.getArticleList();
  }


  getArticleList = () => {
    const { type } = this.props;

    if(type){
      actions.app.getArticlesByType(type).then((response) => {
        actions.app.updateArticle(response.data);
        actions.app.updateTags(getTagsFromArticleList(response.data));
      });
    }

    else{
      actions.app.getAllArticle().then((response) => {
        actions.app.updateArticle(response.data);
      });
    }
  

    // actions.app.getArticlesByTag('React').then((response) => {
    //   console.log(response.data);

    // });


  }


  handleTitleClick = (id) => () => {
    this.props.history.push(`/home/article/${id}`);
  }


  renderArticleItem = (item, key) => {
    return (
      <div className="article-item" key={key}>
        <div className="article-item-main">
          <div className="article-title" onClick={this.handleTitleClick(item.id)}>{item.title}</div>
          <div className="article-content">{item.content}</div>
        </div>
        <div className="article-item-footer">
          <div className="article-create-time">{item.create_date}</div>
          {item.tag && <div className="article-tag">{item.tag}</div>}
        </div>
      </div>);
  }



  render() {
    const { articleList } = this.props;
    return (
      <div className="article-list">
        {articleList && articleList.map((item, index) => this.renderArticleItem(item, index))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  type: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  articleList: PropTypes.array.isRequired,
};


const ArticleListSmart = connect(state => {
  return {
    articleList: state.app.articleList,
  };
})(ArticleList);

export default withRouter(ArticleListSmart);
