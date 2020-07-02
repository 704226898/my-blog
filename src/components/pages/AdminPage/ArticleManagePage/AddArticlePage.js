import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RichEditor from '../../../common/RichEditor';
import { withRouter } from 'mirrorx';
import '../../../../styles/AdminPage/ArticleManagerment/AddArticlePage.scss';

function AddArticlePage() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [type, setType] = useState('web_front_end');
  const onSubmitArticle = (data) => {

  }



  return (
    <div className="admin-add-article">
      <Form>
        <FormGroup>
          <Label for="articleTitle">Title</Label>
          <Input
            id="articleTitle"
            className="article-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="input title" />
        </FormGroup>

        <FormGroup>
          <Label for="articleTag">Tag</Label>
          <Input
            id="articleTag"
            className="article-tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="input tag" />
        </FormGroup>

        <FormGroup>
          <Label for="articleType">Article Type</Label>
          <Input type="select"
            id="articleType"
            className="article-type"
            value={type}
            onChange={(e) => setType(e.target.value)}

          >
            <option value={'web_front_end'}>WEB前端</option>
            <option value={'life'}>生活闲聊</option>

          </Input>
        </FormGroup>


        <Label for="articleTag">Content</Label>
        <RichEditor
          onContentChange={setContent}
          content={content} />

        <Button 
            className="article-submit"
        onClick={onSubmitArticle}>Submit</Button>

      </Form>
    </div>
  );
}


AddArticlePage.propTypes = {

};




export default withRouter(AddArticlePage);
