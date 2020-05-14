import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Color from '../../../_shared/utils/Color';
import Font from '../../../_shared/utils/Font';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Color.BACKGROUND,
    // marginTop: StatusBar.currentHeight,
  },
  scrollView: {
    height,
    left: 0,
    right: 0,
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 30,
    color: Color.PRIMARY,
    fontFamily: Font.NORMAL,
    marginBottom: 20,
  },
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 30,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.SMBOLD,
    fontSize: 20,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  currentDateAndAlarm: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width,
    paddingTop: 10,
  },
  currentDate: {
    fontSize: 20,
    fontFamily: Font.MEDIUM,
    color: Color.TEXTPRIMARY,
    textTransform: 'uppercase',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  timezones: {paddingTop: 10},
  timezoneUi: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  tzLeft: {},
  tzName: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.NORMAL,
    fontSize: 16,
    paddingBottom: 20,
  },
  tzDate: {
    color: Color.TEXTSECONDARY,
    fontFamily: Font.NORMAL,
    fontSize: 14,
  },
  tzRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tzTime: {
    color: Color.TEXTPRIMARY,
    fontSize: 25,
    fontFamily: Font.MEDIUM,
  },
  divider: {
    borderBottomWidth: 1,
    width,
    borderColor: Color.DARK,
  },
});
