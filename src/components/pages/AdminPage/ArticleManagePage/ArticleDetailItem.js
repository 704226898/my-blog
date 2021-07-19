import React from 'react';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
const ArticleDetailItem = ({ article, openDetailModal, deleteArticle, updateArticle }) => {

  const onOpenDetailModal = () => {
    openDetailModal && openDetailModal(article);
  }

  const onUpdateArticle = () => {
    updateArticle && updateArticle(article.id);
  }


  const onDeleteArticle = () => {
    deleteArticle && deleteArticle(article.id);
  }


  return (
    <TableRow key={article.id}>
      <TableCell>
        {article.id}
      </TableCell>
      <TableCell>
        <div className="open-detail-modal" onClick={onOpenDetailModal}>  {article.title}</div>

      </TableCell>

      <TableCell>
        {article.create_date}
      </TableCell>

      <TableCell>
        {article.update_date}
      </TableCell>

      <TableCell>
        <Button variant="contained" color="primary" onClick={onUpdateArticle} >Update</Button>

        <Button variant="contained" color="secondary" onClick={onDeleteArticle} >Delete</Button>
      </TableCell>
    </TableRow>
  );
}

export default ArticleDetailItem;