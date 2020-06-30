import dotProp from 'dot-prop-immutable';
import * as ArticleApis from '../apis/articleApis';
// import {actions} from 'mirrorx'
export const initialState = {
    'articleList': [],
    'currentArticle':{},
    'tags':[]
};

export const reducers = {
    updateArticle(state, data) {
        return dotProp.set(state, 'articleList', data);
    },

    updateTags(state, data) {
        const newTags=['all'].concat(data);



        return dotProp.set(state, 'tags', newTags);
    },


    updateCurrentArticle(state, data) {
        return dotProp.set(state, 'currentArticle', data);
    },

};

export const effects = {
    async getAllArticle() {
       return await ArticleApis.getArticle()
    }, 

    async getArticlesByType(type) {
        return await ArticleApis.getArticleByType(type)
     }, 
  
    async getArticlesByTag(tag) {
        return await ArticleApis.getArticleByTag(tag)
     }, 

     async getArticleById(id) {
        return await ArticleApis.getArticleById(id)
     }, 



};
