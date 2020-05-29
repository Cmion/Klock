import { createActionString } from '../../../_shared/utils';

const entity = 'APP/SETTINGS';
export const SETTINGS_GET_ALL = createActionString('SETTINGS_GET_ALL', entity);
export const SETTINGS_UPDATE_ONE = createActionString(
  'SETTINGS_UPDATE_ONE',
  entity,
);
