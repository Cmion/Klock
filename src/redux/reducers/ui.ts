import { GET_HEADER_SEARCH_VALUE, HEADER_SEARCH_CLOSE } from '../actions';

const initialState = {
  header: {
    search: {
      value: '',
      result: null,
      closed: false,
      touched: false,
    },
  },
};
type InitialStateProps = {
  header: {
    search: {
      value: string;
      result: object | null;
      closed: boolean;
      touched: boolean;
    };
  };
};
type ActionProps = {
  payload: any;
  type: string;
  meta: object;
};
export default (
  state: InitialStateProps = initialState,
  action: ActionProps,
) => {
  const { payload, type } = action;
  switch (type) {
    case GET_HEADER_SEARCH_VALUE.SUCCESS: {
      return {
        ...state,
        header: {
          ...state.header,
          search: {
            ...state.header.search,
            value: payload.value,
            touched: payload.touched,
          },
        },
      };
    }
    case HEADER_SEARCH_CLOSE.SUCCESS: {
      return {
        ...state,
        header: {
          ...state.header,
          search: {
            ...state.header.search,
            closed: payload,
          },
        },
      };
    }

    default:
      return { ...state };
  }
};
