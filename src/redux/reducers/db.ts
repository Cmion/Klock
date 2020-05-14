import {USE_DB} from '../actions';
import Realm from 'realm';

type DBPROPS = {
  Timezones: Partial<Realm>;
  SelectedTimezones: Partial<Realm>;
  Settings: Partial<Realm>;
  Alarm: Partial<Realm>;
  Timer: Partial<Realm>;
  Weather: Partial<Realm>;
  Fitness: Partial<Realm>;
};
const initialState = {
  Timezones: {},
  SelectedTimezones: {},
  Settings: {},
  Alarm: {},
  Timer: {},
  Weather: {},
  Fitness: {},
};

export default (
  state: DBPROPS = initialState,
  action: {payload: any; type: string},
) => {
  const {payload, type} = action;
  switch (type) {
    case USE_DB.SUCCESS: {
      return {...state, ...payload};
    }
    default:
      return {...state};
  }
};
