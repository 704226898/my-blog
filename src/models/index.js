import mirror from 'mirrorx';
import * as articleModal from './articleModal';
import * as userModal from './userModal';
import * as systemModal from './systemModal';


mirror.model({
  name: 'app',
  initialState: Object.assign(
    articleModal.initialState,
    userModal.initialState,
    systemModal.initialState
  ),
  reducers: Object.assign(
    articleModal.reducers,
    userModal.reducers,
    systemModal.reducers
  ),
  effects: Object.assign(
    articleModal.effects,
    userModal.effects,
  )
});
