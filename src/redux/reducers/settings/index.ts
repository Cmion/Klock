import {
  SETTINGS_FIND_BY_ID,
  SETTINGS_UPDATE_ONE,
  SETTINGS_UPDATE_BY_ID,
} from './../../actions';
const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SETTINGS_FIND_BY_ID:
      return {
        ...state,
        [action?.payload[0]?.settings_type]: action.payload[0],
      };
    case SETTINGS_UPDATE_ONE:
    case SETTINGS_UPDATE_BY_ID:
      return {
        ...state,
        [action?.payload?.settings_type]: action.payload,
      };
    default:
      return state;
  }
};
