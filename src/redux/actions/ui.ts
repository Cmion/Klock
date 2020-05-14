import {createActionType} from '../../_shared/utils/Helpers';
const entity = 'UI';
export const GET_HEADER_SEARCH_VALUE = createActionType(
  'GET_HEADER_SEARCH_VALUE',
  entity,
);

export const getHeaderSearchValue = (value: string) => ({
  type: GET_HEADER_SEARCH_VALUE.START,
  payload: value,
});
