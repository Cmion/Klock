import { createActionString } from '../../../_shared/utils/Helpers';

const entity: string = 'APP/INIT';
export const INITIALIZE_APP: string = createActionString(
  'INITIALIZE_APP',
  entity,
);
export const CHECK_INIT: string = createActionString(
  'CHECK_APP_INITIALIZATION',
  entity,
);
export * from './settings';
