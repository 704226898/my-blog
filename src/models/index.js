import mirror from 'mirrorx';
import * as articleModal from './articleModal';
import * as userModal from './userModal';
mirror.model({
  name: 'app',
  initialState: Object.assign(
    articleModal.initialState,
    userModal.initialState,
  ),
  reducers: Object.assign(
    articleModal.reducers,
    userModal.reducers,
  ),
  effects: Object.assign(
    articleModal.effects,
    userModal.effects,
  )
});
