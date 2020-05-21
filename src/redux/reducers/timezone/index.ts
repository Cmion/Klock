import {
  CITY_COLLECTION,
  ZONE_COLLECTION,
  ZONE_INSERT_ONE,
  ZONE_INSERT_MANY,
  ZONE_FIND_ONE,
  ZONE_FIND_BY_ID,
  ZONE_FIND_ALL,
  ZONE_GET_ALL,
  CITY_INSERT_ONE,
  CITY_INSERT_MANY,
  CITY_FIND_ONE,
  CITY_FIND_BY_ID,
  CITY_FIND_ALL,
  CITY_GET_ALL,
} from '../../actions';
import {arrayToById} from '../../../_shared/utils/Helpers';

const initialState = {
  database: {
    city: {},
    zone: {},
  },
  zone: {
    byList: [],
    byId: {},
    current: null,
  },
  city: {
    byList: [],
    byId: {},
    current: null,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CITY_COLLECTION:
      return {...state, database: {...state.database, city: action?.payload}};
    case ZONE_COLLECTION:
      return {...state, database: {...state.database, zone: action?.payload}};
    case ZONE_INSERT_ONE:
    case ZONE_FIND_ONE:
    case ZONE_FIND_BY_ID:
      return {...state, zone: {...state.zone, current: action?.payload}};
    case ZONE_INSERT_MANY:
    case ZONE_FIND_ALL:
    case ZONE_GET_ALL:
      return {
        ...state,
        zone: {
          ...state.zone,
          byList: [...action?.payload],
          byId: arrayToById(action?.payload),
        },
      };
    case CITY_INSERT_ONE:
    case CITY_FIND_BY_ID:
    case CITY_FIND_ONE:
      return {...state, city: {...state.city, current: action?.payload}};

    case CITY_INSERT_MANY:
    case CITY_FIND_ALL:
    case CITY_GET_ALL:
      return {
        ...state,
        city: {
          ...state.city,
          byList: [...action?.payload],
          byId: arrayToById(action?.payload),
        },
      };
    default:
      return state;
  }
};
