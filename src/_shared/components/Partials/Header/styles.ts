import { StyleSheet, StatusBar } from 'react-native';
import Color from '../../../utils/Color';
import Font from '../../../utils/Font';

export default StyleSheet.create({
  header: {
    borderBottomColor: Color.DARK,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: (StatusBar.currentHeight || 20) + 15,
    paddingHorizontal: 20,
    backgroundColor: Color.BACKGROUND,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.SMBOLD,
    fontSize: 21,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 35,

    // paddingRight: 20
  },
  horizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    justifyContent: 'space-between',
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalMenu: {
    paddingLeft: 20,
  },
  textInput: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.MEDIUM,
    fontSize: 16,
    height: 30,
    padding: 2,
  },
  padLeft: { paddingLeft: 10 },
});
