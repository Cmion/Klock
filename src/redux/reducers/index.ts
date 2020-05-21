import uiReducer from './ui';
import appReducer from './app';
import timezoneReducer from './timezone';
import {combineReducers} from 'redux';

export default combineReducers({
  app: appReducer,
  ui: uiReducer,
  timezone: timezoneReducer,
});
