import {INIT_DB, USE_DB, useDB} from '../actions';
import {ObjectSchema} from 'realm';
import {useDB as Realm_useDB} from '../../_shared/utils/RealmDB';

const initDB = ({dispatch} = {dispatch: Function}) => (
  next: Function,
) => (action: {type: string; payload: any; meta: object}) => {
  next(action);
  const type: string = action?.type;
  if (type === INIT_DB.START) {
    const schemaConfig = action?.payload;
    schemaConfig.forEach(
      (config: {
        schemaVersion: number;
        schema: ObjectSchema;
        migration: Function;
        path: string;
      }) => {
        const database = config?.schema?.name;
        dispatch(useDB({database, ...config}));
      },
    );
  }
};

const useDatabase = ({dispatch} = {dispatch: Function}) => (
  next: Function,
) => (action: {
  type: string;
  payload: any;
  meta: {
    config: {
      schemaVersion: number;
      schema: ObjectSchema;
      migration: Function;
      path: string;
      database: string;
    };
  };
}) => {
  next(action);
  const type: string = action?.type;
  if (type === USE_DB.START) {
    const schemaConfig = action?.meta?.config;
    const schemaVersion = schemaConfig?.schemaVersion;
    const path = schemaConfig?.path;
    const schema = schemaConfig?.schema;
    const config = {
      [schemaConfig.database]: Realm_useDB(path, schema, schemaVersion),
    };
    dispatch({
      type: USE_DB.SUCCESS,
      payload: config,
    });
  }
};

export default [useDatabase, initDB];
