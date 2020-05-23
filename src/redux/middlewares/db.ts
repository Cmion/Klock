import {
  INIT_DB,
  INSERT_ONE,
  INSERT_MANY,
  FIND_ONE,
  FIND_BY_ID,
  FIND_ALL,
  GET_ALL,
  UPDATE_BY_ID,
} from '../actions';
import { ObjectSchema, MigrationCallback } from 'realm';
import {
  openDB,
  findAll,
  findById,
  findOne,
  insertMany,
  insertOne,
  sort,
  updateById,
  // updateMany,
  // updateOne,
  // deleteAll,
  // deleteById,
  // deleteMany,
  // deleteOne,
  getAll,
  DatabaseToConfig,
} from '../../_shared/utils/RealmDB';
import { Dispatch } from 'redux';

const Initialize = ({ dispatch }: { dispatch: Dispatch }) => (
  next: Function,
) => (action: {
  type: string;
  payload: any;
  meta: {
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
        };
  };
}) => {
  next(action);
  const type: string = action?.type;
  if (type === INIT_DB) {
    const schemaConfig = action?.meta?.config;
    [schemaConfig]
      .flat()
      .forEach(
        (config: {
          schemaVersion: number;
          schema: ObjectSchema | Array<ObjectSchema>;
          migration: MigrationCallback;
          path: string;
          onSuccess: string;
        }) => {
          const schemaVersion: number = config?.schemaVersion;
          const schema: ObjectSchema | Array<ObjectSchema> = config?.schema;
          const migration: MigrationCallback = config?.migration;
          const path: string = config?.path;
          const onSuccess: string = config?.onSuccess;
          try {
            const data = openDB(path, schema, schemaVersion, migration);
            if (typeof onSuccess === 'string') {
              dispatch({
                type: onSuccess,
                payload: data,
              });
            }
          } catch (e) {
            throw new Error(e);
          }
        },
      );
  }
};

const Create = ({ dispatch }: { dispatch: Dispatch }) => (next: Function) => (
  action: any,
) => {
  next(action);
  const type: string = action?.type;
  if (type === INSERT_ONE || type === INSERT_MANY) {
    const onSuccess: string = action?.meta?.onSuccess;
    const collection: string = action?.meta?.db;
    const { path, schemaVersion, schema, migration } = DatabaseToConfig[
      collection
    ];
    const db: { database: Realm; name: string } = openDB(
      path,
      schema,
      schemaVersion,
      migration,
    );
    const data: any = action?.payload;
    const database = db?.database;

    // Add listener to check if db has been updated then dispatch onSuccess
    database.objects(db?.name).addListener((current: any, changes: any) => {
      if (type === INSERT_ONE) {
        changes.insertions.forEach((index: number) => {
          if (typeof onSuccess === 'string') {
            dispatch({
              type: onSuccess,
              payload: current[index],
            });
          }
        });
      }
      if (type === INSERT_MANY) {
        if (typeof onSuccess === 'string') {
          dispatch({
            type: onSuccess,
            payload: changes.insertions.map((index: number) => current[index]),
          });
        }
      }
    });
    if (type === INSERT_MANY) {
      try {
        insertMany(db, data);
      } catch (e) {
        throw e;
      }
    }

    if (type === INSERT_ONE) {
      try {
        insertOne(db, data);
      } catch (e) {
        throw e;
      }
    }
  }
};

const Retrieve = ({ dispatch }: { dispatch: Dispatch }) => (next: Function) => (
  action: any,
) => {
  next(action);
  const type: string = action?.type;

  if (
    type === FIND_ONE ||
    type === FIND_ALL ||
    type === FIND_BY_ID ||
    type === GET_ALL
  ) {
    const onSuccess: string = action?.meta?.onSuccess;
    const collection: string = action?.meta?.db;
    const {
      param: sortParam,
      order: sortOrder,
    }: { param: string; order: string } = action?.meta?.sort;
    const { path, schemaVersion, schema, migration } = DatabaseToConfig[
      collection
    ];
    const db: { database: Realm; name: string } = openDB(
      path,
      schema,
      schemaVersion,
      migration,
    );
    if (type === FIND_ONE || type === FIND_ALL) {
      const queryString: string = action?.meta?.queryString;

      try {
        const resource =
          type === FIND_ONE
            ? findOne(db, queryString)
            : findAll(db, queryString);
        if (typeof onSuccess === 'string') {
          if (sortParam) {
            dispatch({
              type: onSuccess,
              payload: sort(resource, sortParam, sortOrder === 'asc'),
            });
          } else {
            dispatch({
              type: onSuccess,
              payload: resource,
            });
          }
        }
      } catch (e) {
        throw e;
      }
    }

    if (type === FIND_BY_ID || type === GET_ALL) {
      const id: string = action?.meta?.id;

      try {
        const resource = type === FIND_ALL ? findById(db, id) : getAll(db);
        if (typeof onSuccess === 'string') {
          if (sortParam) {
            dispatch({
              type: onSuccess,
              payload: sort(resource, sortParam, sortOrder === 'asc'),
            });
          } else {
            dispatch({
              type: onSuccess,
              payload: resource,
            });
          }
        }
      } catch (e) {
        throw e;
      }
    }
  }
};

const Update = ({ dispatch }: { dispatch: Dispatch }) => (next: Function) => (
  action: any,
) => {
  next(action);
  const type: string = action?.type;
  if (type === UPDATE_BY_ID) {
    const onSuccess: string = action?.meta?.onSuccess;
    const collection: string = action?.meta?.db;

    const { path, schemaVersion, schema, migration } = DatabaseToConfig[
      collection
    ];
    const db: { database: Realm; name: string } = openDB(
      path,
      schema,
      schemaVersion,
      migration,
    );
    const data = action?.payload;
    const database = db?.database;

    // Listen for changes
    database.objects(db?.name).addListener((current: any, changes: any) => {
      if (type === UPDATE_BY_ID) {
        changes.modifications.forEach((index: number) => {
          if (typeof onSuccess === 'string') {
            dispatch({
              type: onSuccess,
              payload: current[index],
            });
          }
        });
      }
    });
    if (type === UPDATE_BY_ID) {
      const id = action?.meta?.id;
      updateById(db, id, { ...data, updatedAt: new Date().toString() });
    }
  }
};
export default [Initialize, Create, Retrieve, Update];
