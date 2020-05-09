var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tz = require('./timezones.json');
var fs = require('fs');
var path = require('path');
var tzArray = tz.Zones;
var parseOffsets = function (value) {
    return ("" + value)
        .split(':')
        .map(function (value, index) { return (index < 1 ? Number(value) * 60 : Number(value)); })
        .reduce(function (prev, cur) { return prev + cur; }, 0);
};
var parseId = function (data) {
    var idArray = data.Id.split('/');
    return idArray[idArray.length - 1];
};
var parseLocationData = function (data) {
    if (!data.Location)
        return { Location: null };
    var _a = data.Location, CountryName = _a.CountryName, CountryCode = _a.CountryCode, Longitude = _a.Longitude, Latitude = _a.Latitude;
    return {
        country: CountryName,
        countryCode: CountryCode,
        long: Longitude,
        lat: Latitude
    };
};
function parseTimezones(tzArray) {
    var parseData = function (data) { return (__assign(__assign({}, parseLocationData(data)), { city: parseId(data), offsets: data.Offsets.map(function (value) { return parseOffsets(value); }) })); };
    return tzArray
        .map(parseData)
        .filter(function (data) { return data.Location !== null; })
        .sort(function (a, b) { return (b.city > a.city ? -1 : 1); });
}
function writeToFile(filepath, data, cb) {
    fs.writeFile(filepath, data, cb);
}
var filepath = path.join('C:', 'users', 'akpan', 'desktop', 'projects', 'personal', 'apps', 'Klock', 'assets', 'Timezone', 'index.tsx');
writeToFile(filepath, "export default " + JSON.stringify(parseTimezones(tzArray), null, '\t'), function (err) {
    if (err)
        console.error(err);
    else
        console.log('Done');
});
