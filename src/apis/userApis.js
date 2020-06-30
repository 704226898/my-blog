import axios from 'axios';
import APIContants from '../constants/APIContants';

import api from './api'
export const addUser = data => axios.post(
  APIContants.USERS, data
);


export const login = data => api.post(
  APIContants.USER_LOGIN, data
);


export const deleteUser = id => axios.delete(
  APIContants.USERS + `?id=${id}`
);
export const updateUser = (id, data) => axios.put(
  APIContants.USERS + `?id=${id}`, data
);
export const getUsers = id => axios.get(
  APIContants.USERS + (!id?'':`?id=${id}`)
);

export const getAllUsers = id => api.get(
  APIContants.USER 
);

