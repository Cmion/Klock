import { SETTINGS_GET_ALL, SETTINGS_UPDATE_ONE } from './../../actions';
const initialState = {
  current: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SETTINGS_GET_ALL:
    case SETTINGS_UPDATE_ONE:
      return {
        ...state,
        current: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
