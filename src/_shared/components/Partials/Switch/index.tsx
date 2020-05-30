/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { runTiming } from '../../../utils/AnimationHelpers';

import Animated, {
  Value,
  Clock,
  cond,
  Easing,
  eq,
  greaterOrEq,
} from 'react-native-reanimated';
import Color from '../../../utils/Color';

type SwitchProps = {
  height?: number;
  width?: number;
  trackColor?: string;
  inActiveTrackColor?: string;
  borderRadius?: number;
  onChangeValue?: Function;
  thumbColor?: string;
  inActiveThumbColor?: string;
  disabled?: boolean;
  checked: boolean;
};
class Switch extends Component {
  private INDICATORSIZE: number;
  private PADDING: number;
  private TIMING_TO_VALUE: number;
  private STATECHANGED: number;
  private CLOCK: Animated.Clock;
  state: {
    checked: boolean;
  };
  props: SwitchProps;

  static defaultProps = {
    height: 25,
    width: 45,
    borderRadius: 40,
    useDefaultStyle: true,
    trackColor: Color.DARK,
    checked: false,
    thumbColor: Color.PRIMARY,
    inActiveThumbColor: Color.DISABLED,
  };

  static propTypes = {
    height: propTypes.number,
    width: propTypes.number,
    trackColor: propTypes.string,
    inActiveTrackColor: propTypes.string,
    borderRadius: propTypes.number,
    onChangeValue: propTypes.func,
    thumbColor: propTypes.string,
    inActiveThumbColor: propTypes.string,
    disabled: propTypes.bool,
    checked: propTypes.bool,
  };
  constructor(props: SwitchProps) {
    super(props);
    // this.indicatorSize || 70% of the whole element
    this.INDICATORSIZE = (props.height || 25) * 0.7;
    // round(this.indicatorSize / 4)
    this.PADDING = Math.round(this.INDICATORSIZE / 4);
    this.TIMING_TO_VALUE =
      (props.width || 45) - this.INDICATORSIZE - this.PADDING;
    this.CLOCK = new Clock();
    this.STATECHANGED = -1;
    this.props = props;
    this.state = {
      checked: props.checked || false,
    };
  }

  componentDidMount() {
    this.STATECHANGED = -1;
  }
  componentDidUpdate() {
    this.STATECHANGED = -1;
  }

  _animate = (checked: boolean) => {
    return cond(
      greaterOrEq(this.STATECHANGED, 0),
      cond(
        eq(Number(checked), 0),
        runTiming({
          duration: 250,
          from: this.TIMING_TO_VALUE,
          to: this.PADDING,
          clock: this.CLOCK,
          easing: Easing.elastic(),
        }),
        runTiming({
          duration: 250,
          from: this.PADDING,
          to: this.TIMING_TO_VALUE,
          clock: this.CLOCK,
          easing: Easing.elastic(),
        }),
      ),
      cond(
        eq(Number(checked), 1),
        new Value(this.TIMING_TO_VALUE),
        new Value(this.PADDING),
      ),
    );
  };
  render() {
    const {
      height,
      width,
      trackColor,
      inActiveTrackColor,
      borderRadius,
      onChangeValue,
      thumbColor,
      inActiveThumbColor,
      disabled,
    } = this.props;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={disabled}
          accessibilityLabel={'Switch'}
          accessibilityRole={'switch'}
          onPress={() => {
            this.STATECHANGED = 0;
            this.setState({
              ...this.state,
              checked: !this.state.checked,
            });
            // console.log('pressed')
            if (typeof onChangeValue === 'function') {
              onChangeValue(!this.state.checked);
            }
          }}>
          <Animated.View>
            <View
              style={
                (styles.container,
                {
                  height,
                  width,
                  borderRadius,
                  justifyContent: 'center',
                  backgroundColor: trackColor
                    ? this.state.checked
                      ? trackColor
                      : inActiveTrackColor
                      ? inActiveTrackColor
                      : trackColor
                    : Color.DARK,
                })
              }>
              <Animated.View
                style={[
                  {
                    backgroundColor:
                      this.state.checked && !disabled
                        ? thumbColor
                        : inActiveThumbColor
                        ? inActiveThumbColor
                        : thumbColor,
                    height: this.INDICATORSIZE,
                    width: this.INDICATORSIZE,
                    borderRadius: this.INDICATORSIZE,
                  },
                  {
                    transform: [
                      {
                        translateX: this._animate(this.state.checked || 0),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default Switch;
