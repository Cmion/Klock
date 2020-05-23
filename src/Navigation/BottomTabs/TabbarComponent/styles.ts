import { StyleSheet } from 'react-native';
import Color from '../../../_shared/utils/Color';
import { TABBARHEIGHT } from '../../../_shared/utils/Constants';
export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    height: TABBARHEIGHT,
  },
  tabContainer: {
    height: TABBARHEIGHT - 10,
    borderRadius: 60,
    backgroundColor: Color.DARK,
    // paddingHorizontal: 30,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 0,
    position: 'relative',
  },
  tabList: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indList: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabIndicatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    // justifyContent: 'center',
  },
  indicator: {
    height: 6,
    borderRadius: 3,
  },
});
