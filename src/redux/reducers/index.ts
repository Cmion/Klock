import uiReducer from './ui';
import dbReducer from './db';
import {combineReducers} from 'redux';

export default combineReducers({
  ui: uiReducer,
  db: dbReducer,
});
