declare const tz: any;
declare const fs: any;
declare const path: any;
declare type TimezoneData = {
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
declare const tzArray: Array<TimezoneData>;
declare const parseOffsets: (value: string) => number;
declare const parseId: (data: TimezoneData) => string;
declare const parseLocationData: (data: TimezoneData) => {
    Location: any;
    country?: undefined;
    countryCode?: undefined;
    long?: undefined;
    lat?: undefined;
} | {
    country: string;
    countryCode: string;
    long: number;
    lat: number;
    Location?: undefined;
};
declare function parseTimezones(tzArray: Array<TimezoneData>): ({
    city: string;
    offsets: any;
    Location: any;
    country?: undefined;
    countryCode?: undefined;
    long?: undefined;
    lat?: undefined;
} | {
    city: string;
    offsets: any;
    country: string;
    countryCode: string;
    long: number;
    lat: number;
    Location?: undefined;
})[];
declare function writeToFile(filepath: string, data: any, cb: Function): void;
declare const filepath: any;
