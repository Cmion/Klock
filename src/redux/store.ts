import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';
import customMiddleware from './middlewares';
import {
  DatabaseToConfig as collections,
  insertMany,
} from '../_shared/utils/RealmDB';
import { withCities, withZones } from '../../assets/Timezone';
import { openDB, insertOne } from './../_shared/utils/RealmDB/hooks';
import { ObjectSchema, MigrationCallback } from 'realm';
import { Collection } from '../_shared/utils/Constants';
import { INITIALIZE_APP } from './actions';
import { defaultSettings } from './../_shared/data/settings';

const middlewares = applyMiddleware(...customMiddleware);

// Store.
const store = createStore(rootReducers, middlewares);

// Opens a an App initialization DB.
const appSchema = collections?.app?.schema;
const appPath = collections?.app?.path;
const appSchemaVersion = collections?.app?.schemaVersion;
const { database, name } = openDB(appPath, appSchema, appSchemaVersion);

interface collectionProps {
  schema: ObjectSchema;
  schemaVersion: number;
  path: string;
  migration: MigrationCallback;
  onSuccess: string;
}

Object.keys(collections)
  .filter((collection) => collection !== 'app')
  .forEach((collection: string) => {
    // Fetch app db
    const isInitialized = database.objectForPrimaryKey(name, collection);
    if (!isInitialized) {
      // If app is not init, initialize it.
      database.write(() => {
        database.create(name, { _id: collection, isInitialized: true });
      });
      const currentCollectionConfig: collectionProps = collections[collection];
      const schema = currentCollectionConfig?.schema;
      const migration = currentCollectionConfig?.migration;
      const path = currentCollectionConfig?.path;
      const schemaVersion = currentCollectionConfig?.schemaVersion;

      // Initialize each db;
      const currentDB = openDB(path, schema, schemaVersion, migration);

      if (collection.toLowerCase() === Collection.CITY) {
        if (currentDB.database) {
          insertMany(currentDB, withCities);
        }
        store.dispatch({
          type: INITIALIZE_APP,
          payload: {
            key: Collection.CITY,
            isInitialized: true,
          },
        });
      }

      if (collection.toLowerCase() === Collection.ZONE) {
        if (currentDB.database) {
          insertMany(currentDB, withZones);
        }
        store.dispatch({
          type: INITIALIZE_APP,
          payload: {
            key: Collection.ZONE,
            isInitialized: true,
          },
        });
      }
      if (collection.toLowerCase() === Collection.SETTINGS) {
        if (currentDB.database) {
          insertOne(currentDB, defaultSettings);
        }
        store.dispatch({
          type: INITIALIZE_APP,
          payload: {
            key: Collection.SETTINGS,
            isInitialized: true,
          },
        });
      }
    }
  });

console.info(`Klock successfully initialized @ [${new Date().toString()}]`);
export { store };
