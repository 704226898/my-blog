import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RichEditor from '../../../common/RichEditor/RichEditor';
import { withRouter, actions } from 'mirrorx';
import '../../../../styles/AdminPage/ArticleManagerment/AddArticlePage.scss';
import { AdminRouteContants } from '../../../../constants/AdminRouteConfig';
import moment from 'moment';
import ArticleDetails from '../../../common/ArticleDetails/ArticleDetails';
function AddArticlePage({ history }) {

  const [isPreView, setIsPreView] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [type, setType] = useState('web_front_end');
  const onSubmitArticle = () => {

    const data = {
      content,
      title,
      tag,
      type
    }

    actions.app.createArticle(data).then((res) => {
      console.log(res);
      history.replace(AdminRouteContants.ADMIN_ARTICLES);
    }).catch((err) => {
      console.log(err);

    })
  }

  const onPreview = () => {

    const data = {
      content,
      title,
      tag,
      type,
      create_date:moment().format()
    }


    actions.app.updateCurrentArticle(data);

    setIsPreView(true);
  }



  return (
    <div className="admin-add-article">

      {!isPreView && <Form> <FormGroup>
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
      </Form>}


      {isPreView && <div className="preview-article"><ArticleDetails /></div>}
      <Button
        className="article-submit"
        onClick={onSubmitArticle}>Submit</Button>
      {!isPreView && <Button
        className="article-preview"
        onClick={onPreview}>Preview</Button>}
      {isPreView && <Button
        className="article-preview"
        onClick={()=> setIsPreView(false)}>Cancel Preview</Button>}

    </div>
  );
}


AddArticlePage.propTypes = {

};




export default withRouter(AddArticlePage);
