
import _ from 'lodash';
import ArticleContants from '../constants/ArticleContants';



export const getTagsFromArticleList = (articleList) => {

  if (!articleList || articleList.length <= 0) {
    return [];
  }


  let tags = [];

  _.uniqBy(articleList, 'tag').map((article) => {
    tags.push(article.tag);
  })

  return tags;
}


export const checkNewArticle= (article)=>{
  if(!article.title){
    return ArticleContants.ADD_ARTICLE_ERRORS.NO_TITLE;
  }

  if(!article.content){
    return ArticleContants.ADD_ARTICLE_ERRORS.NO_CONTENT;
  }

  if(!article.tag){
    return ArticleContants.ADD_ARTICLE_ERRORS.NO_TAG;
  }

  if(!article.type){
    return ArticleContants.ADD_ARTICLE_ERRORS.NO_TYPE;
  }

return true;
}