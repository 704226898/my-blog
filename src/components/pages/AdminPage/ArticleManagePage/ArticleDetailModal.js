import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ArticleDetailModal = (props) => {
  const {
    closeFunc,
    article,
    isOpen
  } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={closeFunc} className="article-detail-modal">
        <ModalHeader toggle={closeFunc}>{article.title}</ModalHeader>
        <ModalBody>
          <div dangerouslySetInnerHTML={{__html:article.content}}></div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={closeFunc}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ArticleDetailModal;