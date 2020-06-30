import dotProp from 'dot-prop-immutable';
import * as UserApi from '../apis/userApis';
// import {actions} from 'mirrorx'
export const initialState = {
    'users': {test:1},
    'currentUser': {},
};

export const reducers = {
    updateUsers(state, data) {
        return dotProp.set(state, 'users', data);
    },
    updateCurrentUsers(state, data) {
        return dotProp.set(state, 'currentUser', data);
    },

};

export const effects = {
    async getUsers(id) {
       return await UserApi.getUsers(id)
    }, 
    async addUser(data) {
        return await UserApi.addUser(data)
     }, 

     async updateUser({id, data}) {
        return await UserApi.updateUser(id, data)
     },

     async deleteUser(id) {
        return await UserApi.deleteUser(id)
     },


};
