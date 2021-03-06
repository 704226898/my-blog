import axios from 'axios';

const api = axios.create({
  baseURL: 'http://47.94.209.185:8080',
  headers: {
    common: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

  },
  params: {
    'request_origin': 'react-web-app'
  },
  withCredentials: true

})
api.create = api.post;
api.update = api.put;


export default api;