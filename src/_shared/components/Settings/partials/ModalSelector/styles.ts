import { StyleSheet } from 'react-native';
import Color from '../../../../utils/Color';
import Font from '../../../../utils/Font';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
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
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: { backgroundColor: Color.SECONDARY, borderRadius: 10 },
  modalHeader: {
    justifyContent: 'center',
    paddingBottom: 20,
    borderBottomColor: Color.BACKGROUND,
    padding: 20,
  },
  radioGroup: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    fontFamily: Font.MEDIUM,
    fontSize: 20,
    color: Color.TEXTPRIMARY,
  },
  scroll: {
    paddingBottom: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopColor: Color.BACKGROUND,
    borderTopWidth: 1,
  },
  footerText: {
    fontFamily: Font.MEDIUM,
    fontSize: 14,
    color: Color.PRIMARY,
  },
});
