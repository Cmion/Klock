import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';
import Font from '../../utils/Font';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 20,
    color: Color.TEXTPRIMARY,
    fontFamily: Font.MEDIUM,
  },
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    borderBottomColor: Color.DARK,
    borderBottomWidth: 1,
    // paddingHorizontal: 20,
  },
  sectionHeader: {
    justifyContent: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
    // paddingLeft: 30,
  },
  itemsContainer: {
    justifyContent: 'center',
  },
  items: {
    paddingHorizontal: 20,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  clickable: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingLeft: 30,
    paddingVertical: 20,
  },
  clickableText: {
    fontFamily: Font.MEDIUM,
    fontSize: 16,
    color: Color.TEXTPRIMARY,
  },
  clickableSubText: {
    fontFamily: Font.NORMAL,
    fontSize: 14,
    color: Color.PRIMARY,
  },
  menu: {
    paddingHorizontal: 20,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  volumeText: { paddingBottom: 15 },
  sliderThumbStyle: {
    borderWidth: 3,
    height: 25,
    width: 25,
    borderRadius: 25,
    borderColor: Color.BACKGROUND,
  },
});
