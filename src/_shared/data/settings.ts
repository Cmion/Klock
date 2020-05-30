import withZones from './../../../assets/Timezone/withZones';

import { getTimeZone } from 'react-native-localize';

export const clockStyle = [
  {
    label: 'Analog',
    value: 1,
  },
  {
    label: 'Digital',
    value: 2,
  },
];

export const locales = [
  {
    label: 'English',
    value: 1,
  },
];

export const silenceAfter = Array(7)
  .fill(1)
  .map((_, index: number, array: number[]) => {
    if (index === 0) {
      return { value: _, label: `${_} minute` };
    }
    if (index !== array.length - 1) {
      return { label: `${index * 5} minutes`, value: index + 1 };
    }
    return { label: 'Never', value: index + 1 };
  });

export const snoozeLength = Array(30)
  .fill(0)
  .map((_, index: number) => {
    if (index === 0) {
      return { label: '1 minute', value: 1 };
    }

    return { label: `${index + 1} minutes`, value: index + 1 };
  });

export const graduallyIncreaseVolume = Array(13)
  .fill('Never')
  .map((_, index: number) => {
    if (index < 1) {
      return { label: _, value: 1 };
    }

    return { value: index + 1, label: `${index * 5} seconds` };
  });

export const volumeButtons = [
  { label: 'Control volume', value: 1 },
  { label: 'Snooze', value: 2 },
  { label: 'Dismiss', value: 3 },
];

export const weekStart = [
  { label: 'Sunday', value: 1 },
  { label: 'Friday', value: 2 },
  { label: 'Saturday', value: 3 },
  { label: 'Monday', value: 4 },
];

export const language = [{ name: 'English', id: 1 }];
export const defaultSettings = {
  settings_type: 'app',
  clock_style: 1,
  display_time_with_seconds: false,
  automatic_home_clock: false,
  home_time_zone: withZones.find((value) => value?.utc.includes(getTimeZone()))
    ?.text,
  language: 1,
  language_id: 1,
  alarm_silence_after: 2,
  alarm_snooze_length: 10,
  alarm_volume: 5,
  alarm_week_start: 1,
  alarm_volume_buttons: 1,
  alarm_increase_volume: 1,
  timer_increase_volume: 1,
  timer_sound: ['Radar', 'Radar'],
};
