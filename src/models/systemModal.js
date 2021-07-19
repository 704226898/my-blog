import dotProp from 'dot-prop-immutable';

export const initialState = {
  'systemStyle': 'light',

};
export const reducers = {
  changeSystemStyle(state) {
    const newStyle = state.systemStyle === 'light' ? 'dark' : 'light'
    return dotProp.set(state, 'systemStyle', newStyle);
  }
};


