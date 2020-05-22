import { GET_HEADER_SEARCH_VALUE, HEADER_SEARCH_CLOSE } from '../actions';

type ActionProps = {
  payload: string | object | Array<any> | boolean;
  type: string;
  meta: object;
};
const header = ({ dispatch }: { dispatch: Function }) => (next: Function) => (
  action: ActionProps,
) => {
  next(action);
  if (action.type === GET_HEADER_SEARCH_VALUE.START) {
    dispatch({
      type: GET_HEADER_SEARCH_VALUE.SUCCESS,
      payload: action.payload,
    });
  }
  if (action.type === HEADER_SEARCH_CLOSE.START) {
    dispatch({
      type: HEADER_SEARCH_CLOSE.SUCCESS,
      payload: action.payload,
    });
  }
};

export default [header];
