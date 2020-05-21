import {GET_HEADER_SEARCH_VALUE} from '../actions';

type ActionProps = {
  payload: string | object | Array<any> | boolean;
  type: string;
  meta: object;
};
const header = ({dispatch}: {dispatch: Function}) => (next: Function) => (
  action: ActionProps,
) => {
  next(action);
  if (action.type === GET_HEADER_SEARCH_VALUE.START) {
    dispatch({
      type: GET_HEADER_SEARCH_VALUE.SUCCESS,
      payload: action.payload,
    });
  }
};

export default [header];
