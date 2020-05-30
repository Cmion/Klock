import { StyleSheet } from 'react-native';
import Color from '../../../utils/Color';
import Font from '../../../utils/Font';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 40,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  displayText: {
    fontFamily: Font.NORMAL,
    fontSize: 14,
    color: Color.PRIMARY,
    lineHeight: 28,
    paddingRight: 20,
  },
});
