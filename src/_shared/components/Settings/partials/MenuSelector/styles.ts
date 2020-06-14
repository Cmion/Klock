import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../../../utils/Color';
import Font from '../../../../utils/Font';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    width,
  },
  menu: {
    elevation: 0,
    width: 130,
    borderRadius: 5,
    marginLeft: 30,
  },
  menuText: {
    paddingHorizontal: 10,
  },
  displayText: {
    fontFamily: Font.MEDIUM,
    fontSize: 16,
    color: Color.TEXTPRIMARY,
    paddingBottom: 10,
  },
  subText: {
    fontFamily: Font.NORMAL,
    fontSize: 14,
    color: Color.PRIMARY,
  },
});
