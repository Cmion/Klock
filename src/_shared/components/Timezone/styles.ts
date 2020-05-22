import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../utils/Color';
import Font from '../../utils/Font';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: Color.BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  renderContainer: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  renderMainContainer: {
    width: (width - 60) * 0.7,
  },
  cityText: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.NORMAL,
    fontSize: 13,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  check: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 15,
  },
  timeText: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.NORMAL,
    fontSize: 13,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingVertical: 20,
  },
  emptySearchText: {
    fontSize: 16,
    fontFamily: Font.NORMAL,
    color: Color.TEXTPRIMARY,
  },
  flatListContainer: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});
