import {Action} from 'redux';

const logger = (
  {getState, _dispatch} = {getState: Function, _dispatch: Function},
) => (next: Function) => (action: Action) => {
  next(action);
  console.log(JSON.stringify(action, null, '\t'));
};

export default [logger];
