import {GET_HEADER_SEARCH_VALUE} from '../actions';

const initialState = {
  header: {
    search: {
      value: '',
      result: null,
    },
  },
};
type InitialStateProps = {
  header: {
    search: {
      value: string;
      result: object | null;
    };
  };
};
type ActionProps = {
  payload: string | object | Array<any> | boolean;
  type: string;
  meta: object;
};
export default (
  state: InitialStateProps = initialState,
  action: ActionProps,
) => {
  const {payload, type} = action;
  switch (type) {
    case GET_HEADER_SEARCH_VALUE.SUCCESS: {
      return {
        ...state,
        header: {
          ...state.header,
          search: {...state.header.search, value: payload},
        },
      };
    }

    default:
      return {...state};
  }
};
