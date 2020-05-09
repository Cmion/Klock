const tz = require('./timezones.json');
const fs = require('fs');
const path = require('path');

type TimezoneData = {
  Id: string;
  Aliases: Array<string>;
  Location: {
    CountryName: string;
    CountryCode: string;
    Longitude: number;
    Latitude: number;
    Comment: string;
  };
  Offsets: Array<number>;
};

const tzArray: Array<TimezoneData> = tz.Zones;
const parseOffsets = (value: string | number) =>
  `${value}`
    .split(':')
    .map((value, index) => (index < 1 ? Number(value) * 60 : Number(value)))
    .reduce((prev, cur) => prev + cur, 0);

const parseId = (data: TimezoneData) => {
  const idArray = data.Id.split('/');
  return idArray[idArray.length - 1];
};

const parseLocationData = (data: TimezoneData) => {
  if (!data.Location) return {Location: null};
  const {
    Location: {CountryName, CountryCode, Longitude, Latitude},
  } = data;
  return {
    country: CountryName,
    countryCode: CountryCode,
    long: Longitude,
    lat: Latitude,
  };
};

function parseTimezones(tzArray: Array<TimezoneData>) {
  const parseData = (data: TimezoneData) => ({
    ...parseLocationData(data),
    city: parseId(data),
    offsets: data.Offsets.map((value) => parseOffsets(value)),
  });
  return tzArray
    .map(parseData)
    .filter((data) => data.Location !== null)
    .sort((a, b) => (b.city > a.city ? -1 : 1));
}

function writeToFile(filepath: string, data: any, cb: Function) {
  fs.writeFile(filepath, data, cb);
}

const filepath = path.join(
  'C:',
  'users',
  'akpan',
  'desktop',
  'projects',
  'personal',
  'apps',
  'Klock',
  'assets',
  'Timezone',
  'index.tsx',
);
writeToFile(
  filepath,
  `export default ${JSON.stringify(parseTimezones(tzArray), null, '\t')}`,
  (err: Error) => {
    if (err) console.error(err);
    else console.log('Done');
  },
);
