import { StyleSheet } from 'react-native';
import Color from '../../../utils/Color';
import Font from '../../../utils/Font';

export default StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2.5,
    // backgroundColor: Color.DARK,
    // padding: 0
  },
  icon: {
    paddingRight: 10,
  },
  textStyle: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.MEDIUM,
  },
  menuOptions: {
    backgroundColor: Color.SECONDARY,
    borderRadius: 5,
    borderWidth: 0,
  },
});
