import realm, {ObjectSchema} from 'realm';

type TimezoneProps = {
  city: string;
  country: string;
  countryCode: string;
  long: number;
  lat: number;
  offsets: number[];
};
export const useDB = (
  path: string,
  schema: ObjectSchema,
  schemaVersion: number,
) => {
  try {
    const database = new realm({path, schema: [schema], schemaVersion});
    return {database, name: schema.name};
  } catch (e) {
    throw e;
  }
};

export const insertOne = (
  db: {database: realm; name: string},
  data: object,
) => {
  const {database, name} = db;
  database.write(() => {
    const alreadyExist = database
      .objects(name)
      .filtered(`_id == "${data._id || 0}"`);
    if (!alreadyExist || alreadyExist.length <= 0) {
      database.create(name, data);
      console.info('Data successfully added to collection');
    } else {
      const keys = Object.keys(data);
      keys.forEach((value) => {
        //   if (open.objects(schema.name).filtered(data.city).length === 0) {
        if (value !== 'id') {
          alreadyExist[value] = data[value];
        }
        //   }
      });
      console.info(
        'Data already existed in collection, existing data has been successfully updated',
      );
    }
  });
};

export const findOne = (
  db: {database: realm; name: string},
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
  db: {database: realm; name: string},
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
  db: {database: realm; name: string},
  id: string | number, // Eg: city=London
) => {
  const {database, name} = db;
  try {
    let response = database.objects(name).filtered(`id = ${String(id)}`)[0];
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getAll = (db: {database: realm; name: string}) => {
  const {database, name} = db;
  try {
    let response = database.objects(name);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const sort = (db: realm, sortParam: string, order: boolean = false) =>
  db.sorted(sortParam, order);
export const updateOne = (
  db: {database: realm; name: string},
  queryString: string,
  data: object,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(queryString)[0];
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    const keys = Object.keys(data);
    keys.forEach((value) => {
      if (value !== 'id') {
        alreadyExist[value] = data[value];
      }
    });
    console.info('Collection updated successfully');
  });
};
export const updateById = (
  db: {database: realm; name: string},
  id: string | number,
  data: object,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(`id = ${id}`)[0];
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return null;
  }
  database.write(() => {
    const keys = Object.keys(data);
    keys.forEach((value) => {
      if (value !== 'id') {
        alreadyExist[value] = data[value];
      }
    });
    console.info('Collection updated successfully');
  });
};
export const updateMany = (
  db: {database: realm; name: string},
  queryString: string,
  data: object,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(queryString);
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    alreadyExist.forEach((element: object) => {
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
  db: {database: realm; name: string},
  queryString: string,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(queryString)[0];
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(alreadyExist);
    console.info('Data successfully deleted from collection');
  });
};
export const deleteById = (
  db: {database: realm; name: string},
  id: number | string,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(`id = ${id}`)[0];
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot update a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(alreadyExist);
    console.info('Data successfully deleted from collection');
  });
};
export const deleteAll = (db: {database: realm; name: string}) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name);
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot delete a none existing collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(alreadyExist);
    console.info('Data successfully deleted collection');
  });
};

export const deleteMany = (
  db: {database: realm; name: string},
  queryString: string,
) => {
  const {database, name} = db;
  const alreadyExist = database.objects(name).filtered(queryString);
  if (!alreadyExist || alreadyExist.length <= 0) {
    console.warn('Cannot delete a none existing data in collection ' + name);
    return;
  }
  database.write(() => {
    database.delete(alreadyExist);
    console.info('Collection data deleted successfully');
  });
};
export const prettify = (db: any) => JSON.stringify(Array.from(db), null, '\t');
