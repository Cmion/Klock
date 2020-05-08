/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput} from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface AnimatedText {
  text: string;
  style: object;
}
const AnimatedText = (props: AnimatedText) => {
  const text = props?.text || '';
  const style = props?.style || '';
  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      {...{text, style}}
    />
  );
};
export default AnimatedText;
