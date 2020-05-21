import Realm, {ObjectSchema, MigrationCallback} from 'realm';
import {objectId} from '../Helpers';

export const openDB = (
  path: string,
  schema: ObjectSchema | Array<ObjectSchema>,
  schemaVersion: number,
  migration?: MigrationCallback,
) => {
  try {
    const database = new Realm({
      path,
      schema: [schema].flat(),
      schemaVersion,
      migration,
    });
    return {
      database,
      name: Array.isArray(schema) ? schema[0].name : schema.name,
    };
  } catch (e) {
    throw e;
  }
};

export const insertOne = (
  db: {database: Realm; name: string},
  data: object,
) => {
  const {database, name} = db;
  try {
    database.write(() => {
      database.create(name, {...data, _id: objectId()});
    });
  } catch (e) {
    throw e;
  }
};

export const insertMany = (
  db: {database: Realm; name: string},
  data: Array<object>,
) => {
  const {database, name} = db;

  try {
    database.write(() => {
      data.forEach((value) => {
        database.create(name, {...value, _id: objectId()});
      });
    });
  } catch (e) {
    throw e;
  }
};

export const findOne = (
  db: {database: Realm; name: string},
  queryString: string, // Eg: city=London
) => {
  const {database, name} = db;
  try {
    let response = database.objects(name).filtered(queryString)[0];
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
export const findAll = (
  db: {database: Realm; name: string},
  queryString: string, // Eg: city=London
) => {
  const {database, name} = db;
  try {
    let response = database.objects(name).filtered(queryString);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const findById = (
  db: {database: Realm; name: string},
  id: string, // Eg: city=London
) => {
  const {database, name} = db;
  try {
    let response = database.objectForPrimaryKey(name, id);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getAll = (db: {database: Realm; name: string}) => {
  const {database, name} = db;
  try {
    let response = database.objects(name);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const sort = (db: any, sortParam: string, order: boolean = false) =>
  db.sorted(sortParam, order);

export const updateOne = (
  db: {database: Realm; name: string},
  queryString: string,
  data: object,
) => {
  const {database, name} = db;
  const model = database.objects(name).filtered(queryString)[0];
  if (!model || model.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    const keys = Object.keys(data);
    keys.forEach((value) => {
      if (value !== 'id') {
        model[value] = data[value];
      }
    });
    console.info('Collection updated successfully');
  });
};
export const updateById = (
  db: {database: Realm; name: string},
  id: string,
  data: object,
) => {
  const {database, name} = db;
  const model = database.objectForPrimaryKey(name, id);
  if (!model || model.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return null;
  }
  database.write(() => {
    const keys = Object.keys(data);
    keys.forEach((value) => {
      if (value !== 'id') {
        model[value] = data[value];
      }
    });
    console.info('Collection updated successfully');
  });
};
export const updateMany = (
  db: {database: Realm; name: string},
  queryString: string,
  data: object,
) => {
  const {database, name} = db;
  const model = database.objects(name).filtered(queryString);
  if (!model || model.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    model.forEach((element: object) => {
      const keys = Object.keys(data);
      keys.forEach((value: string) => {
        if (value !== 'id') {
          element[value] = data[value];
        }
      });
      console.info('Collection updated successfully');
    });
  });
};

export const deleteOne = (
  db: {database: Realm; name: string},
  queryString: string,
) => {
  const {database, name} = db;
  const model = database.objects(name).filtered(queryString)[0];
  if (!model || model.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(model);
    console.info('Data successfully deleted from collection');
  });
};
export const deleteById = (
  db: {database: Realm; name: string},
  id: number | string,
) => {
  const {database, name} = db;
  const model = database.objects(name).filtered(`id = ${id}`)[0];
  if (!model || model.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(model);
    console.info('Data successfully deleted from collection');
  });
};
export const deleteAll = (db: {database: Realm; name: string}) => {
  const {database, name} = db;
  const model = database.objects(name);
  if (!model || model.length <= 0) {
    console.warn('Cannot delete a none existing collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(model);
    console.info('Data successfully deleted collection');
  });
};

export const deleteMany = (
  db: {database: Realm; name: string},
  queryString: string,
) => {
  const {database, name} = db;
  const model = database.objects(name).filtered(queryString);
  if (!model || model.length <= 0) {
    console.warn('Cannot delete a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(model);
    console.info('Collection data deleted successfully');
  });
};
export const prettify = (data: any) =>
  JSON.stringify(Array.from(data), null, '\t');
