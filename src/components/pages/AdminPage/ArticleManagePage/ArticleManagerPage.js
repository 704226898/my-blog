import React, { Component } from 'react';
import { connect, actions } from 'mirrorx';

import '../../../../styles/AdminPage/ArticleManagerment/ArticleList.scss';
import { withRouter } from 'mirrorx';
import SearchBox from '../../../common/SearchBox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ArticleDetailModal from './ArticleDetailModal';
import ArticleDetailItem from './ArticleDetailItem';


class ArticleManagerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailModalOpen: false,
      detailModalArticle: {}
    }
  }

  componentDidMount() {
    actions.app.getAllArticle().then((response) => {
      actions.app.updateArticle(response.data);
    });
  }

  openDetailModal = (article) => {
    this.setState({
      isDetailModalOpen: true,
      detailModalArticle: article
    });
  }
  closeDetailModal = () => {
    this.setState({
      isDetailModalOpen: false,
      detailModalArticle: {}
    })
  }

  onDeleteArticle = (id) => {
    actions.app.deleteArticleById(id).then(() => {
      actions.app.getAllArticle().then((response) => {
        actions.app.updateArticle(response.data);
      });
    });

  }


  render() {
    const { articleList } = this.props;

    const { isDetailModalOpen, detailModalArticle } = this.state;
    return (
      <div className="admin-article-list-container">
        <div className="tool-bar">
          <SearchBox />
        </div>


        <div className="admin-article-list">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Create Time</TableCell>
                  <TableCell>Update Time</TableCell>
                  <TableCell>Operation</TableCell>
                </TableRow>
              </TableHead>


              <TableBody>
                {articleList.map((article) => <ArticleDetailItem
                  openDetailModal={this.openDetailModal}
                  deleteArticle={this.onDeleteArticle}
                  updateArticle={this.openDetailModal}
                  article={article} />)}


              </TableBody>
            </Table>

          </TableContainer>
        </div>
        <ArticleDetailModal
          closeFunc={this.closeDetailModal}
          article={detailModalArticle}
          isOpen={isDetailModalOpen}

        />
      </div>
    );
  }
}

ArticleManagerPage.propTypes = {

};


const ArticleManagerPageSmart = connect(state => {
  return {
    articleList: state.app.articleList,
  };
})(ArticleManagerPage);

export default withRouter(ArticleManagerPageSmart);
