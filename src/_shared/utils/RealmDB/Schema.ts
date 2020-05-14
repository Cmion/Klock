import {DBPath} from './index';
import {schemaVersion} from 'realm';
export const TimezonesSchema = {
  name: 'Timezones',
  primaryKey: 'city',
  properties: {
    _id: 'string',
    city: 'string',
    country: 'string',
    countryCode: 'string',
    long: 'float',
    lat: 'float',
    offsets: 'int[]',
  },
};
export const TimezoneConfig = {
  schema: TimezonesSchema,
  schemaVersion: 0,
  path: DBPath,
  migration: null,
};
