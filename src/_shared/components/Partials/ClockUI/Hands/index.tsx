import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import Color from '../../../../utils/Color';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const styles = StyleSheet.create({
  absoluteView: {
    position: 'absolute',
  },
});
interface HandsProps {
  size: number;
  handLength: number;
  decorPosition: number;
  decorInnerGap: number;
  decorSize: number;
  decorInnerSize: number;
  rotate: Animated.Node<string>;
}

const defaultProps = {
  size: 300,
  handLength: 70,
  decorPosition: 50,
  decorInnerGap: 7,
  decorSize: 13,
  decorInnerSize: 2,
  rotate: new Animated.Value((Math.PI * 2 * 1) / 12),
};
const Hands = ({
  size,
  handLength,
  decorPosition,
  decorInnerGap,
  decorSize,
  decorInnerSize,
  rotate,
}: HandsProps) => {
  return (
    <AnimatedSvg
      height={size}
      width={size}
      style={{
        ...styles.absoluteView,
        transform: [{ rotate }],
      }}>
      <Line
        fill="none"
        x1={size / 2}
        x2={size / 2}
        y1={size / 2}
        y2={size / 2 - handLength}
        stroke={Color.DARK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <Circle
        cx={size / 2}
        cy={size / 2 - decorPosition}
        r={decorSize}
        stroke={'none'}
        fill={Color.DARK}
      />
      <Circle
        cx={size / 2}
        cy={size / 2 - decorPosition + decorInnerGap}
        r={decorInnerSize}
        stroke={'none'}
        fill={Color.TEXTSECONDARY}
      />
      <Circle
        cx={size / 2}
        cy={size / 2 - decorPosition}
        r={decorInnerSize}
        stroke={'none'}
        fill={Color.TEXTSECONDARY}
      />
      <Circle
        cx={size / 2}
        cy={size / 2 - decorPosition - decorInnerGap}
        r={decorInnerSize}
        stroke={'none'}
        fill={Color.TEXTSECONDARY}
      />
    </AnimatedSvg>
  );
};

Hands.defaultProps = defaultProps;

export default Hands;
