import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const TABBARWIDTH = width * 0.9;
export const CLOCKSIZE = width * 0.65;
export const TABBARHEIGHT = 70; // height + bottom margin
export const Collection = {
  CITY: 'city',
  ZONE: 'zone',
  ALARM: 'alarm',
  SETTINGS: 'settings',
  TIMER: 'timer',
};
