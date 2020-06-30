import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { actions } from 'mirrorx';

import '../../../styles/Common/Tags/index.css';
import ArticleContants from '../../../constants/ArticleContants';


class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {


      currentTag: ArticleContants.ALL
    }
  }

  handleTagClick = (tag) => () => {
    const { type } = this.props;
    const { currentTag } = this.state;
    if (currentTag === tag) {
      return;
    }

    if (tag === ArticleContants.ALL) {
      actions.app.getArticlesByType(type).then((response) => {
        actions.app.updateArticle(response.data);
      });
    }

    else {
      actions.app.getArticlesByTag(tag).then((response) => {
        actions.app.updateArticle(response.data);
      });
    }



    this.setState({ currentTag: tag });


  }



  render() {
    const { tags } = this.props;
    const { currentTag } = this.state;
    return (
      <div className="tags-container">
        {
          tags.map((tag, index) => <Button key={index} onClick={this.handleTagClick(tag)} color="link" className={currentTag === tag ? 'selected' : ''}  >{tag === ArticleContants.ALL ? '全部' : tag}</Button>)
        }
      </div>
    );
  }
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default Tag;
