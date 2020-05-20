import {createActionString} from './../../../_shared/utils/Helpers/index';
const entity: string = 'timezone';

export const CITY_INSERT_ONE = createActionString('CITY_INSERT_ONE', entity);
export const CITY_COLLECTION = createActionString('CITY_COLLECTION', entity);
export const CITY_INSERT_MANY = createActionString('CITY_INSERT_MANY', entity);
export const CITY_GET_ALL = createActionString('CITY_GET_ALL', entity);
export const CITY_FIND_ONE = createActionString('CITY_FIND_ONE', entity);
export const CITY_FIND_ALL = createActionString('CITY_FIND_ALL', entity);
export const CITY_FIND_BY_ID = createActionString('CITY_FIND_BY_ID', entity);