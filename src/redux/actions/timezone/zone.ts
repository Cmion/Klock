import {createActionString} from './../../../_shared/utils/Helpers/index';
const entity: string = 'timezone';

export const ZONE_COLLECTION = createActionString('ZONE_COLLECTION', entity);
export const ZONE_INSERT_ONE = createActionString('ZONE_INSERT_ONE', entity);
export const ZONE_INSERT_MANY = createActionString('ZONE_INSERT_MANY', entity);
export const ZONE_GET_ALL = createActionString('ZONE_GET_ALL', entity);
export const ZONE_FIND_ONE = createActionString('ZONE_FIND_ONE', entity);
export const ZONE_FIND_ALL = createActionString('ZONE_FIND_ALL', entity);
export const ZONE_FIND_BY_ID = createActionString('ZONE_FIND_BY_ID', entity);
