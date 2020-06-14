import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import Color from '../../../utils/Color';

const DEFAULT_SIZE_MULTIPLIER = 0.7;
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.2;

export default class RadioButton extends Component {
  static propTypes = {
    size: PropTypes.number,
    innerColor: PropTypes.string,
    outerColor: PropTypes.string,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    size: 12,
    innerColor: Color.PRIMARY,
    outerColor: Color.TEXTPRIMARY,
    isSelected: false,
    onPress: () => null,
  };

  render() {
    const { size, innerColor, outerColor, isSelected, onPress } = this.props;
    const outerStyle = {
      borderColor: outerColor,
      width: size + size * DEFAULT_SIZE_MULTIPLIER,
      height: size + size * DEFAULT_SIZE_MULTIPLIER,
      borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
      borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER,
    };

    const innerStyle = {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: innerColor,
    };

    return (
      <TouchableOpacity
        style={[
          styles.radio,
          outerStyle,
          { borderColor: isSelected ? Color.PRIMARY : Color.TEXTPRIMARY },
        ]}
        onPress={onPress}>
        {isSelected ? (
          <Animated.View style={innerStyle} {...this.props} />
        ) : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
