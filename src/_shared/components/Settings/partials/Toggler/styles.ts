import { StyleSheet } from 'react-native';
import Font from '../../../../utils/Font';
import Color from '../../../../utils/Color';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  displayText: {
    fontFamily: Font.MEDIUM,
    fontSize: 16,
    color: Color.TEXTPRIMARY,
    paddingBottom: 10,
  },
  subTextContainer: {
    width: '70%',
  },
  subText: {
    fontFamily: Font.MEDIUM,
    fontSize: 12,
    color: Color.TEXTSECONDARY,
  },
});
