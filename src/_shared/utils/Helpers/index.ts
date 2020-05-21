export const createActionType = (type = 'APP', entity = 'APP') => ({
  START: `@@KLOCK[${entity}] ${type.toUpperCase()}_START`,
  ERROR: `@@KLOCK[${entity}] ${type.toUpperCase()}_ERROR`,
  SUCCESS: `@@KLOCK[${entity}] ${type.toUpperCase()}_SUCCESS`,
  END: `@@KLOCK[${entity}] ${type.toUpperCase()}_END`,
});
export const createActionString = (type = 'APP', entity = 'APP') =>
  `@@KLOCK[${entity}] ${type.toUpperCase()}`;

export const capitalize = (value: string) => {
  if (typeof value !== 'string') {
    throw new TypeError(
      'function capitalize expected type string, got type ' + typeof value,
    );
  }
  const splittedValue = value.split('');
  const firstLetter = splittedValue[0].toUpperCase();
  return firstLetter + splittedValue.slice(1).join('');
};

export const objectId = (): string => {
  // eslint-disable-next-line no-bitwise
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, () => {
        // eslint-disable-next-line no-bitwise
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};
export const arrayToById = (array: Array<{}>) => {
  return array.reduce((accumulator, currentObject) => {
    const {_id} = currentObject;
    accumulator[_id] = currentObject;
    return accumulator;
  }, {});
};

export function debounce(
  callback: Function,
  wait: number = 200,
  immediate: boolean = false,
): Function {
  let timeout: any;

  return function execute(): void {
    let context = this;
    let args = arguments;
    timeout = null;

    // Timeout callback
    const later = function (): void {
      // reset timeout
      timeout = null;
      // invoke callback function if has not been called immediately
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    // determine whether to call func immediately
    const callNow = immediate && !timeout;

    // clears timeout to prevent previous timeout from return results
    clearTimeout(timeout);
    // set timeout
    timeout = setTimeout(later, wait);

    // calls func if immediate is true
    if (callNow) {
      callback.apply(context, args);
    }
  };
}
