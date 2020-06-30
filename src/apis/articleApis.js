
import APIContants from '../constants/APIContants';
import api from './api'


// export const addUser = data => axios.post(
//   APIContants.USERS, data
// );

// export const deleteUser = id => axios.delete(
//   APIContants.ARTICLE + `?id=${id}`
// );
// export const updateUser = (id, data) => axios.put(
//   APIContants.USERS + `?id=${id}`, data
// );
export const getArticle = () => api.get(
  APIContants.ARTICLE
);

export const getArticleById = (id) => api.get(
  APIContants.ARTICLE + `/${id}`
);

export const getArticleByType = (type) => api.get(
  APIContants.ARTICLE, {
  params: {
    type
  }
}
);

export const getArticleByTag = (tag) => api.get(
  APIContants.ARTICLE_TAG, {
  params: {
    tag
  }
}
);
