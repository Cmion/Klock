/* eslint-disable prettier/prettier */
import {ComponentType} from 'react';
import Fitness from './Fitness';
import Alarm from './Alarm';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

type ModuleProps = {
  name: string;
  icon: string;
  component: ComponentType<{}>;
};
const ModuleConfig: Array<ModuleProps> = [
  {
    name: 'Clock',
    icon: 'schedule',
    component: Clock,
  },
  {
    name: 'Alarm',
    icon: 'alarm',
    component: Alarm,
  },
  {
    name: 'Timer',
    icon: 'hourglass-empty',
    component: Timer,
  },
  {
    name: 'Stopwatch',
    icon: 'timer',
    component: Stopwatch,
  },
  // {
  //   name: 'Fitness',
  //   icon: 'fitness-center',
  //   component: Fitness,
  // },
];
export default ModuleConfig;
