import {
  createActionString,
  createActionType,
} from '../../_shared/utils/Helpers';
import { ObjectSchema, MigrationCallback } from 'realm';

const entity = 'DATABASE';
export const USE_DB = createActionType('USE_DB', entity);
export const INIT_DB = createActionString('INIT_DB', entity);
export const UPDATE_ONE = createActionString('UPDATE_ONE', entity);
export const UPDATE_MANY = createActionString('UPDATE_MANY', entity);
export const UPDATE_BY_ID = createActionString('UPDATE_BY_ID', entity);
export const INSERT_ONE = createActionString('INSERT_ONE', entity);
export const INSERT_MANY = createActionString('INSERT_MANY', entity);
export const GET_ALL = createActionString('GET_ALL', entity);
export const FIND_ONE = createActionString('FIND_ONE', entity);
export const FIND_ALL = createActionString('FIND_ALL', entity);
export const FIND_BY_ID = createActionString('FIND_BY_ID', entity);
export const DELETE_ONE = createActionString('DELETE_ONE', entity);
export const DELETE_MANY = createActionString('DELETE_MANY', entity);
export const DELETE_ALL = createActionString('DELETE_ALL', entity);
export const DELETE_BY_ID = createActionString('DELETE_BY_ID', entity);

export const initDB = (
  config:
    | Array<{
        schemaVersion: number;
        schema: ObjectSchema;
        migration: MigrationCallback;
        path: string;
        database: string;
        onSuccess: string;
      }>
    | {
        schemaVersion: number;
        schema: ObjectSchema;
        migration: MigrationCallback;
        path: string;
        database: string;
        onSuccess: string;
      },
) => ({
  type: INIT_DB,
  meta: {
    config,
  },
});

export const deleteById = (
  db: string,
  id: string | number,
  onSuccess: string,
) => ({
  type: DELETE_BY_ID,
  meta: {
    db,
    id,
    onSuccess,
  },
});
export const deleteAll = (db: string, onSuccess: string) => ({
  type: DELETE_ALL,
  meta: {
    db,
    onSuccess,
  },
});
export const deleteMany = (
  db: string,
  queryString: string,
  onSuccess: string,
) => ({
  type: DELETE_MANY,
  meta: {
    db,
    queryString,
    onSuccess,
  },
});
export const deleteOne = (
  db: string,
  queryString: string,
  onSuccess: string,
) => ({
  type: DELETE_ONE,
  meta: {
    db,
    queryString,
    onSuccess,
  },
});
export const findById = ({
  db,
  id,
  onSuccess,
  sort,
}: {
  db: string;
  id: string | number;
  onSuccess: string;
  sort: { param: string; order: string };
}) => ({
  type: FIND_BY_ID,
  meta: {
    db,
    id,
    onSuccess,
    sort,
  },
});
export const findAll = ({
  db,
  queryString,
  onSuccess,
  sort,
}: {
  db: string;
  queryString: string;
  onSuccess: string;
  sort: { param: string; order: string };
}) => ({
  type: FIND_ALL,
  meta: {
    db,
    queryString,
    onSuccess,
    sort,
  },
});
export const findOne = ({
  db,
  queryString,
  onSuccess,
  sort,
}: {
  db: string;
  queryString: string;
  onSuccess: string;
  sort: { param: string; order: string };
}) => ({
  type: FIND_ONE,
  meta: {
    db,
    queryString,
    onSuccess,
    sort,
  },
});
export const getAll = ({
  db,
  onSuccess,
  sort,
}: {
  db: string;
  onSuccess: string;
  sort: { param: string; order: string };
  sortParam: string;
}) => ({
  type: GET_ALL,
  meta: {
    db,
    onSuccess,
    sort,
  },
});
export const insertMany = ({
  db,
  data,
  onSuccess,
}: {
  db: string;
  data: Array<{}>;
  onSuccess: string;
}) => ({
  type: INSERT_MANY,
  meta: {
    db,
    onSuccess,
  },
  payload: data,
});
export const insertOne = ({
  db,
  data,
  onSuccess,
}: {
  db: string;
  data: any;
  onSuccess: string;
}) => ({
  type: INSERT_ONE,
  meta: {
    db,
    onSuccess,
  },
  payload: data,
});

export const updateOne = ({
  db,
  queryString,
  data,
  onSuccess,
}: {
  db: string;
  queryString: string;
  data: object;
  onSuccess: string;
}) => ({
  type: UPDATE_ONE,
  payload: data,
  meta: {
    db,
    queryString,
    onSuccess,
  },
});
export const updateMany = ({
  db,
  queryString,
  data,
  onSuccess,
}: {
  db: string;
  queryString: string;
  data: object;
  onSuccess: string;
}) => ({
  type: UPDATE_MANY,
  payload: data,
  meta: {
    db,
    queryString,
    onSuccess,
  },
});

export const updateById = ({
  db,
  id,
  data,
  onSuccess,
}: {
  db: string;
  id: string;
  data: object;
  onSuccess: string;
}) => ({
  type: UPDATE_BY_ID,
  payload: data,
  meta: {
    db,
    id,
    onSuccess,
  },
});
