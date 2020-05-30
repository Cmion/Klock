import { MigrationCallback, ObjectSchema } from 'realm';
import { getTimeZone } from 'react-native-localize';
import { withZones } from '../../../../assets/Timezone';

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

export const CitySchema = {
  name: 'City',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    createdAt: { type: 'date', default: new Date().toString(), optional: true },
    updatedAt: { type: 'date', default: new Date().toString(), optional: true },
    city: 'string',
    city_short: 'string',
    country: 'string',
    country_code: 'string',
    utcOffset: 'string',
    dst: 'string[]',
    isSelected: { type: 'bool', default: false, optional: true },
  },
};
export const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'settings_type',
  properties: {
    clock_style: { type: 'int', default: 1 },
    settings_type: { type: 'string' },
    display_time_with_seconds: { type: 'bool', default: false },
    automatic_home_clock: { type: 'bool', default: false },
    home_time_zone: {
      type: 'string',
      default: withZones.find((value) => value?.utc.includes(getTimeZone()))
        ?.text,
    },
    language: { type: 'int', default: 1 },
    language_id: { type: 'int', default: 1 },
    alarm_silence_after: { type: 'int', default: 1 },
    alarm_snooze_length: { type: 'int', default: 1 },
    alarm_volume: { type: 'int', default: 5 },
    alarm_week_start: { type: 'int', default: 1 },
    alarm_volume_buttons: { type: 'int', default: 1 },
    alarm_increase_volume: { type: 'int', default: 1 },
    timer_increase_volume: { type: 'int', default: 1 },
    timer_sound: { type: 'string[]' },
    updatedAt: { type: 'date', default: new Date().toString() },
    createdAt: { type: 'date', default: new Date().toString() },
  },
};

export const AppInit = {
  name: 'App_Initialized',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    isInitialized: { type: 'bool', default: false },
  },
};
export const TimezoneConfig = {
  schema: TimezonesSchema,
  schemaVersion: 0,
  path: 'KLOCK_ZONE_EXP.realm',
  migration: function (oldRealm: Realm, newRealm: Realm) {
    if (oldRealm.schemaVersion < 1) {
      const oldObjects = oldRealm.objects('Timezones');
      // const newObjects = newRealm.objects('Timezones');

      // loop through all objects and set the name property in the new schema
      for (let i = 0; i < oldObjects.length; i++) {
        // newObjects[i].offset = Number(oldObjects.offset[0]);
        // newObjects[i].createdAt = new Date().toString();
        // newObjects[i].updatedAt = new Date().toString();
      }
    }
  },
};
export const CityConfig = {
  schema: CitySchema,
  schemaVersion: 4,
  path: 'KLOCK_CITY_EXP.realm',
  migration: function (oldRealm: Realm, newRealm: Realm) {
    if (oldRealm.schemaVersion < 3) {
      const oldObjects = oldRealm.objects('City');
      const newObjects = newRealm.objects('City');

      // loop through all objects and set the name property in the new schema
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].offset = Number(oldObjects.offset[0]);
        newObjects[i].createdAt = new Date().toString();
        newObjects[i].updatedAt = new Date().toString();
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
export const SettingsConfig = {
  schema: SettingsSchema,
  schemaVersion: 6,
  path: 'KLOCK_SETTINGS_EXP.realm',
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
  settings: Config;
};
export const DatabaseToConfig: DBToConfig = {
  city: CityConfig,
  zone: TimezoneConfig,
  app: AppConfig,
  settings: SettingsConfig,
};
