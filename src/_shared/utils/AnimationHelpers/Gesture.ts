/* eslint-disable prettier/prettier */
import Animated from 'react-native-reanimated';
import {State} from 'react-native-gesture-handler';

const {Value, event, cond, eq, set, add} = Animated;

export const onScrollEvent = (contentOffset: object) =>
  event([
    {
      nativeEvent: {
        contentOffset,
      },
    },
  ]);

export const onGestureEvent = (nativeEvent: object) => {
  const gestureEvent = event([{nativeEvent}]);
  return {
    onHandlerStateChange: gestureEvent,
    onGestureEvent: gestureEvent,
  };
};

/**
 *  Abstracted from react-native-redash |
 * Remembers the previous state of the gesture |
 * Stores the current location |
 * Sets the previous location as an offset |
 * Returns the translation value back to zero; so its offsetted the next time the handler gets moved.
 */
export const withOffset = (
  value: Animated.Value<number>,
  state: Animated.Node<State>,
  offset: Animated.Value<number> = new Value(0),
) =>
  cond(
    eq(state, State.END),
    [set(offset, add(offset, value))],
    add(offset, value),
  );

/**
 * Clamps a number to a specified range.
 */
export const clampNumber = (
  number: number,
  upperBound: number,
  lowerBound: number,
) => Math.min(Math.max(number, lowerBound), upperBound);
