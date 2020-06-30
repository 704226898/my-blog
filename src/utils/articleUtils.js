
import _ from 'lodash';
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