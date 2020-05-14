import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {runTiming, clampNumber} from '../../../utils/AnimationHelpers';

import Animated, {
  Value,
  Easing,
  cond,
  eq,
  greaterOrEq,
} from 'react-native-reanimated';
import Color from '../../../utils/Color';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);
const styles = StyleSheet.create({
  centerAll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  size?: number;
  tintColor?: string;
  backgroundColor?: string;
  onValueChanged: Function;
};
class Checkbox extends PureComponent {
  #STATECHANGED: number;
  #BORDERWIDTH: number;
  #SIZE: number;
  #ICONSIZE: number;
  #TINTCOLOR: string;
  state: {
    checked: boolean;
    disabled: boolean;
  };
  props: CheckboxProps;

  constructor(props: CheckboxProps) {
    super(props);
    this.#STATECHANGED = -1;
    this.#BORDERWIDTH = (props.size || 27) > 27 ? 2 : 1.5;
    this.#SIZE = clampNumber(props.size || 22.5, 50, 22.5);
    this.#ICONSIZE = Math.round(this.#SIZE * 0.6);
    this.#TINTCOLOR = props.tintColor || Color.PRIMARY;
    this.props = props;
    this.state = {
      checked: props.checked || false,
      disabled: props.disabled || false,
    };
  }

  // componentDidMount() {
  //   this.#STATECHANGED = -1;
  // }
  // componentDidUpdate() {
  //   this.#STATECHANGED = -1;
  // }
  render() {
    const {backgroundColor} = this.props;
    return (
      <TouchableOpacity
        accessibilityLabel={'checkbox'}
        accessibilityRole={'checkbox'}
        disabled={this.props.disabled}
        activeOpacity={0.8}
        onPress={() => {
          this.#STATECHANGED = 0;
          this.setState({...this.state, checked: !this.state.checked});
          typeof this.props.onValueChanged === 'function'
            ? this.props.onValueChanged(this.state.checked)
            : null;
        }}
        style={[
          styles.centerAll,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: this.#SIZE,
            width: this.#SIZE,
            borderWidth: this.#BORDERWIDTH,
            borderColor: this.state.checked
              ? backgroundColor || Color.BACKGROUND
              : Color.TEXTSECONDARY,
            borderRadius: this.#SIZE,
            backgroundColor: this.state.checked
              ? this.#TINTCOLOR
              : 'transparent',
          },
        ]}>
        <AnimatedIcon
          name={'check'}
          color={
            this.state.checked
              ? backgroundColor || Color.BACKGROUND
              : Color.TEXTSECONDARY
          }
          size={this.#ICONSIZE}
          style={{
            transform: [
              {
                scale: cond(
                  greaterOrEq(this.#STATECHANGED, 0),
                  runTiming({
                    duration: 100,
                    from: 0,
                    to: 1,
                    easing: Easing.ease,
                  }),
                  cond(
                    eq(Number(this.state.checked), 1),
                    new Value(1),
                    new Value(1),
                  ),
                ),
              },
            ],
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default Checkbox;
