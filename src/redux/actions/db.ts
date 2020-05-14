import {createActionType} from '../../_shared/utils/Helpers';
import {ObjectSchema} from 'realm';

const entity = 'DATABASE';
export const USE_DB = createActionType('USE_DB', entity);
export const INIT_DB = createActionType('INIT_DB', entity);
export const UPDATE_ONE = createActionType('UPDATE_ONE', entity);
export const UPDATE_MANY = createActionType('UPDATE_MANY', entity);
export const UPDATE_BY_ID = createActionType('UPDATE_BY_ID', entity);
export const INSERT_ONE = createActionType('INSERT_ONE', entity);
export const INSERT_MANY = createActionType('INSERT_MANY', entity);
export const GET_ALL = createActionType('GET_ALL', entity);
export const FIND_ONE = createActionType('FIND_ONE', entity);
export const FIND_ALL = createActionType('FIND_ALL', entity);
export const FIND_BY_ID = createActionType('FIND_BY_ID', entity);
export const DELETE_ONE = createActionType('DELETE_ONE', entity);
export const DELETE_MANY = createActionType('DELETE_MANY', entity);
export const DELETE_ALL = createActionType('DELETE_ALL', entity);
export const DELETE_BY_ID = createActionType('DELETE_BY_ID', entity);

export const initDB = (schemaConfig: Array<{}>) => ({
  type: INIT_DB.START,
  payload: schemaConfig,
});
export const deleteById = (
  db: {database: Realm; name: string},
  id: string | number,
) => ({
  type: DELETE_BY_ID.START,
  meta: {
    db,
    id,
  },
});
export const deleteAll = (db: {database: Realm; name: string}) => ({
  type: DELETE_ALL.START,
  meta: {
    db,
  },
});
export const deleteMany = (
  db: {database: Realm; name: string},
  queryString: string,
) => ({
  type: DELETE_MANY.START,
  meta: {
    db,
    queryString,
  },
});
export const deleteOne = (
  db: {database: Realm; name: string},
  queryString: string,
) => ({
  type: DELETE_ONE.START,
  meta: {
    db,
    queryString,
  },
});
export const findById = (
  db: {database: Realm; name: string},
  id: string | number,
) => ({
  type: FIND_BY_ID.START,
  meta: {
    db,
    id,
  },
});
export const findAll = (
  db: {database: Realm; name: string},
  queryString: string,
) => ({
  type: FIND_ALL.START,
  meta: {
    db,
    queryString,
  },
});
export const findOne = (
  db: {database: Realm; name: string},
  queryString: string,
) => ({
  type: FIND_ONE.START,
  meta: {
    db,
    queryString,
  },
});
export const getAll = (db: {database: Realm; name: string}) => ({
  type: GET_ALL.START,
  meta: {
    db,
  },
});
export const insertMany = (
  db: {database: Realm; name: string},
  payload: Array<{}>,
) => ({
  type: INSERT_MANY.START,
  meta: {
    db,
  },
  payload,
});
export const insertOne = (
  db: {database: Realm; name: string},
  payload: object,
) => ({
  type: INSERT_ONE.START,
  meta: {
    db,
  },
  payload,
});
export const useDB = (config: {
  schemaVersion: number;
  schema: ObjectSchema;
  migration: Function;
  path: string;
  database: string;
}) => ({
  type: USE_DB.START,
  meta: {
    config,
  },
});

export const UpdateOne = (
  db: {database: Realm; name: string},
  queryString: string,
  payload: object,
) => ({
  type: UPDATE_ONE.START,
  payload,
  meta: {
    db,
    queryString,
  },
});
export const UpdateMany = (
  db: {database: Realm; name: string},
  queryString: string,
  payload: object,
) => ({
  type: UPDATE_MANY.START,
  payload,
  meta: {
    db,
    queryString,
  },
});

export const UpdateById = (
  db: {database: Realm; name: string},
  id: string | number,
  payload: object,
) => ({
  type: UPDATE_BY_ID.START,
  payload,
  meta: {
    db,
    id,
  },
});
