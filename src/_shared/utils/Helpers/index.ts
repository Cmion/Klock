import moment from 'moment';

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
    const { _id } = currentObject;
    accumulator[_id] = currentObject;
    return accumulator;
  }, {});
};

export function debounce(
  callback: Function,
  effect?: Function,
  wait: number = 250,
  immediate: boolean = false,
): Function {
  let timeout: any;

  return function executedFunction(...args: Array<any>) {
    // eslint-disable-next-line consistent-this
    let context = this;

    let later = function () {
      timeout = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    if (typeof effect === 'function') {
      effect();
    }

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}
export const parseOffset = (offset: string): string => {
  return offset
    ? offset.split('UTC')[1].includes(':')
      ? offset.split('UTC')[1]
      : offset.split('UTC')[1] + ':00'
    : '+00:00';
};

export const monthsIndex = (monthName: string): number => {
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  return months[capitalize(monthName)];
};
export const parseDST = (data: {
  dst: [string, string, string];
  utcOffset: string;
  setter?: moment.Moment | Date;
}) => {
  const [start, end, dstOffset] = data.dst;
  const setter = data?.setter;
  const defaultDate =
    setter && (moment.isMoment(setter) || moment.isDate(setter))
      ? setter
      : moment();
  if (start === 'undefined' && end === 'undefined') {
    return moment(defaultDate).utcOffset(parseOffset(data.utcOffset));
  }

  const year = moment().get('year');
  const [startDay, startMonth] = start.split(' ');
  const [endDay, endMonth] = end.split(' ');
  // prettier-ignore
  const startDate = moment([year, monthsIndex(startMonth), startDay, 0, 0, 0]);
  const endDate = moment([year, monthsIndex(endMonth), endDay, 23, 59, 59]);
  const isDST = moment().isBetween(startDate, endDate);
  if (isDST) {
    return moment(defaultDate).utcOffset(parseOffset(dstOffset));
  }

  return moment(defaultDate).utcOffset(parseOffset(dstOffset));
};
