import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import Font from '../../../utils/Font';

const styles = StyleSheet.create({
  container: {
    width: 185,
    height: 55,
    borderRadius: 55,
    backgroundColor: Color.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Color.DARK,
    fontSize: 17,
    fontFamily: Font.NORMAL,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const defaultProps: object = {
  height: 55,
  width: 185,
  borderRadius: 55,
  fontSize: 17,
  color: Color.DARK,
  backgroundColor: Color.PRIMARY,
  fontFamily: Font.NORMAL,
};

interface ButtonProps {
  icon: FunctionComponent<{
    color: string;
  }>;
  title?: string;
  onPress: Function;
  width?: number;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
}
const Button = ({
  icon: Icon,
  title,
  onPress,
  height,
  width,
  borderRadius,
  fontSize,
  color,
  backgroundColor,
  fontFamily,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, {height, width, borderRadius, backgroundColor}]}
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}>
      <View
        style={[styles.iconContainer, {paddingRight: Icon && title ? 10 : 0}]}>
        {Icon ? <Icon color={color || Color.DARK} /> : null}
      </View>
      {title ? (
        <View style={styles.textContainer}>
          <Text style={[styles.btnText, {fontFamily, fontSize, color}]}>
            {title ? title : null}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
Button.defaultProps = defaultProps;
export default Button;
