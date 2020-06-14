import { INITIALIZE_APP, CHECK_INIT } from './../../actions/app/index';
const initialState = {
  initialized: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        initialized: {
          [action?.payload?.key]: action?.payload?.isInitialized,
        },
      };
    default:
      return state;
  }
};
