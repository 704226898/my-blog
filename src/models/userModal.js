import dotProp from 'dot-prop-immutable';
import * as UserApis from '../apis/userApis';
import { actions } from 'mirrorx';
export const initialState = {
  'login_status': '',
  'userList': [],
  'currentUser': {}
};

export const reducers = {
  updateLoginStatus(state, data) {
    return dotProp.set(state, 'login_status', data);
  },
  updateUserList(state, data) {
    return dotProp.set(state, 'userList', data);
  },

  updateCurrentUser(state, data) {
    return dotProp.set(state, 'currentUser', data);
  },
};

export const effects = {
  async login({ username, password }) {
    return await UserApis.login({ username, password });
  },

  async getAllUser() {
    await UserApis.getAllUsers().then((res) => {
      actions.app.updateUserList(res.data);
    });
  },
};
