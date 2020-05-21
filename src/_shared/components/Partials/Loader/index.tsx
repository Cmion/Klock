import React, {useMemo} from 'react';
import {Animated, Easing, View, StyleSheet, StyleProp} from 'react-native';
import Color from '../../../utils/Color';

const {Value, loop, timing} = Animated;
const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Ball = ({
  ballSize,
  color,
  index,
  size,
}: {
  ballSize: number;
  color: string;
  index: number;
  size: number;
}) => {
  const value = useMemo(() => new Value(0), []);
  loop(
    timing(value, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.bezier(0.5, index * 0.3, 0.9, 0.9),
    }),
  ).start();
  return (
    <Animated.View
      style={[
        styles.absolute,
        {
          width: size,
          height: size,
          opacity: value.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.05],
          }),
          transform: [
            {
              rotate: value.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '1440deg'],
              }),
            },
          ],
        },
      ]}>
      <View
        style={{
          width: ballSize,
          height: ballSize,
          borderRadius: ballSize / 2,
          backgroundColor: color,
        }}
      />
    </Animated.View>
  );
};
const getBalls = ({
  countBalls,
  color,
  size,
  ballSize,
}: {
  countBalls: number;
  radius: number;
  angle: number;
  color: string;
  size: number;
  ballSize: number;
}) => {
  const balls = [];
  //   const offset = ballSize / 2;
  for (let i = 0; i < countBalls; i++) {
    // const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
    // const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
    balls.push(
      <Ball
        color={color}
        ballSize={ballSize}
        size={size}
        key={i.toString()}
        index={i}
      />,
    );
  }
  return balls;
};

const Loader = ({
  color = Color.PRIMARY,
  size = 45,
  style,
  loading,
}: {
  color?: string;
  size?: number;
  style?: StyleProp<{}>;
  loading: boolean;
}) => {
  const radius: number = (size || 45) / 2;
  const countBalls: number = 8;
  const ballSize: number = (size || 45) / 5;
  const angle: number = 360 / countBalls;
  return (
    <View
      style={[
        style,
        styles.container,
        {
          height: size,
          width: size,
        },
      ]}>
      {loading &&
        getBalls({
          countBalls,
          radius,
          angle,
          color,
          size,
          ballSize,
        })}
    </View>
  );
};

export default Loader;
