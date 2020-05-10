/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {runTiming, onGestureEvent} from '../../utils/AnimationHelpers';
import {
  TapGestureHandler,
  State,
  TapGestureHandlerProperties,
} from 'react-native-gesture-handler';
import Animated, {
  Value,
  call,
  Clock,
  onChange,
  cond,
  Easing,
  eq,
  block,
  greaterOrEq,
} from 'react-native-reanimated';
import Color from '../../utils/Color';

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
  checked?: boolean;
};
class Switch extends PureComponent {
  #INDICATORSIZE: number;
  #PADDING: number;
  #TIMING_TO_VALUE: number;
  #STATE: Animated.Node<State>;
  #STATECHANGED: number;
  #GESTUREHANDLER: TapGestureHandlerProperties;
  #CLOCK: Animated.Clock;
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
    // this.#indicatorSize || 70% of the whole element
    this.#INDICATORSIZE = (props.height || 25) * 0.7;
    // round(this.#indicatorSize / 4)
    this.#PADDING = Math.round(this.#INDICATORSIZE / 4);
    this.#TIMING_TO_VALUE = (props.width || 45) - this.#INDICATORSIZE - this.#PADDING;
    this.#CLOCK = new Clock();
    this.#STATE = new Value(State.UNDETERMINED);
    this.#STATECHANGED = -1;
    this.#GESTUREHANDLER = onGestureEvent({state: this.#STATE});
    this.props = props;
    this.state = {
      checked: props.checked || false,
    };
  }

  componentDidMount() {
    this.#STATECHANGED = -1;
  }

  _animate = (checked: boolean) => {
    return cond(
      greaterOrEq(this.#STATECHANGED, 0),
      cond(
        eq(Number(checked), 0),
        runTiming({
          duration: 300,
          from: this.#TIMING_TO_VALUE,
          to: this.#PADDING,
          clock: this.#CLOCK,
          easing: Easing.elastic(),
        }),
        runTiming({
          duration: 300,
          from: this.#PADDING,
          to: this.#TIMING_TO_VALUE,
          clock: this.#CLOCK,
          easing: Easing.elastic(),
        }),
      ),
      cond(
        eq(Number(checked), 1),
        new Value(this.#TIMING_TO_VALUE),
        new Value(this.#PADDING),
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
        <Animated.Code>
          {() =>
            block([
              onChange(
                this.#STATE,
                cond(
                  eq(this.#STATE, State.BEGAN),
                  call([], () => {
                    if (!disabled) {
                      this.#STATECHANGED = 0;
                      this.setState({
                        ...this.state,
                        checked: !this.state.checked,
                      });
                    }
                    if (typeof onChangeValue === 'function' && !disabled) {
                      onChangeValue(this.state.checked);
                    }
                  }),
                ),
              ),
            ])
          }
        </Animated.Code>
        <TapGestureHandler {...this.#GESTUREHANDLER} numberOfTaps={1}>
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
                    height: this.#INDICATORSIZE,
                    width: this.#INDICATORSIZE,
                    borderRadius: this.#INDICATORSIZE,
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
        </TapGestureHandler>
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
