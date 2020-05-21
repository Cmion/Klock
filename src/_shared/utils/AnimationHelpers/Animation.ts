/* eslint-disable prettier/prettier */
import Animated, {
  Clock,
  Easing,
  cond,
  Value,
  timing,
  startClock,
  set,
  block,
  and,
  not,
  clockRunning,
  stopClock,
} from 'react-native-reanimated';

interface LoopConfig {
  clock?: Animated.Clock;
  easing?: Animated.EasingFunction;
  duration?: number;
  boomerang?: boolean;
  autoStart?: boolean;
}
export const loop = (loopConfig: LoopConfig) => {
  const {clock, easing, duration, boomerang, autoStart} = {
    clock: new Clock(),
    easing: Easing.linear,
    duration: 250,
    boomerang: false,
    autoStart: true,
    ...loopConfig,
  };
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration,
    easing,
  };

  return block([
    cond(and(not(clockRunning(clock)), autoStart ? 1 : 0), startClock(clock)),
    timing(clock, state, config),
    cond(state.finished, [
      stopClock(clock),
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(state.position, 0),
      startClock(clock),
      boomerang
        ? set(config.toValue, cond(config.toValue, 0, 1))
        : set(state.position, 0),
    ]),
    state.position,
  ]);
};

type TimingConfig = {
  clock?: Animated.Clock;
  easing?: Animated.EasingFunction;
  to?: number;
  from?: number;
  duration?: number;
};

export const runTiming = (
  timingConfig: TimingConfig,
): Animated.Node<number> => {
  const clock = timingConfig.clock || new Clock();
  const from = timingConfig.from || 0;
  const to = timingConfig.to || 10;
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  const config = {
    duration: 1000,
    easing: Easing.inOut(Easing.ease),
    toValue: new Value(to),
    ...timingConfig,
  };

  return block([
    cond(not(clockRunning(clock)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(state.position, from),
      set(config.toValue, to),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, [stopClock(clock)]),
    state.position,
  ]);
};
