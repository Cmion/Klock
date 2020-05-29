import withZones from './../../../assets/Timezone/withZones';

import { getTimeZone } from 'react-native-localize';

export const clockStyle = [
  {
    name: 'Analog',
    id: 1,
  },
  {
    name: 'Digital',
    id: 2,
  },
];

export const language = [{ name: 'English', id: 1 }];
export const defaultSettings = {
  clock_style: 1,
  display_time_with_seconds: false,
  automatic_home_clock: false,
  home_time_zone: withZones.find((value) => value?.utc.includes(getTimeZone()))
    ?.text,
  language: 1,
  language_id: 1,
  alarm_silence_after: 1,
  alarm_snooze_length: 1,
  alarm_volume: 5,
  alarm_week_start: 1,
  alarm_volume_buttons: 1,
  alarm_increase_volume: 1,
  timer_increase_volume: 1,
  timer_sound: ['Radar', 'Radar'],
};
