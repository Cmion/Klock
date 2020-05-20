import {MigrationCallback, ObjectSchema} from 'realm';

export const TimezonesSchema = {
  name: 'Timezones',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    value: 'string',
    abbr: 'string',
    offset: 'int',
    isdst: 'bool',
    text: 'string',
    utc: 'string[]',
  },
};
export const DstSchema = {
  name: 'CITYDST',
  properties: {
    start: 'string',
    end: 'string',
    offset: 'string',
  },
};
export const CitySchema = {
  name: 'City',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    city: 'string',
    city_short: 'string',
    country: 'string',
    country_code: 'string',
    timezone: 'string',
    dst: 'string[]',
    isSelected: {type: 'bool', default: false, optional: true},
  },
};

export const AppInit = {
  name: 'App_Initialized',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    isInitialized: {type: 'bool', default: false},
  },
};
export const TimezoneConfig = {
  schema: TimezonesSchema,
  schemaVersion: 0,
  path: 'KLOCK_ZONE_EXP.realm',
  migration: function (oldRealm: Realm, newRealm: Realm) {
    if (oldRealm.schemaVersion < 1) {
      const oldObjects = oldRealm.objects('Timezones');
      const newObjects = newRealm.objects('Timezones');

      // loop through all objects and set the name property in the new schema
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].offset = Number(oldObjects.offset[0]);
      }
    }
  },
};
export const CityConfig = {
  schema: CitySchema,
  schemaVersion: 3,
  path: 'KLOCK_CITY_EXP.realm',
  migration: function (oldRealm: Realm, newRealm: Realm) {
    if (oldRealm.schemaVersion < 3) {
      const oldObjects = oldRealm.objects('City');
      const newObjects = newRealm.objects('City');

      // loop through all objects and set the name property in the new schema
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].isSelected = false;
      }
    }
  },
};
export const AppConfig = {
  schema: AppInit,
  schemaVersion: 0,
  path: 'KLOCK_APP_EXP.realm',
  migration: function () {
    /* Migration function will go in here */
  },
};

interface Config {
  schema: ObjectSchema;
  schemaVersion: number;
  path: string;
  migration: MigrationCallback;
}
type DBToConfig = {
  city: Config;
  zone: Config;
  app: Config;
};
export const DatabaseToConfig: DBToConfig = {
  city: CityConfig,
  zone: TimezoneConfig,
  app: AppConfig,
};
