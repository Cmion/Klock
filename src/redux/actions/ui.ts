import { createActionType } from '../../_shared/utils/Helpers';
const entity = 'UI';
export const GET_HEADER_SEARCH_VALUE = createActionType(
  'GET_HEADER_SEARCH_VALUE',
  entity,
);
export const HEADER_SEARCH_CLOSE = createActionType(
  'HEADER_SEARCH_CLOSE',
  entity,
);

export const getHeaderSearchValue = ({
  value,
  touched,
}: {
  value: string;
  touched: false;
}) => ({
  type: GET_HEADER_SEARCH_VALUE.START,
  payload: {
    value,
    touched,
  },
});
export const headerSearchClose = (value: boolean) => ({
  type: HEADER_SEARCH_CLOSE.START,
  payload: value,
});
