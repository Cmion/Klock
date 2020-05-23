import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
  getHeaderSearchValue,
  headerSearchClose,
} from '../../../../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../../utils/Color';
import styles from './styles';
import Animated, { Easing } from 'react-native-reanimated';
import { runTiming } from '../../../utils/AnimationHelpers';

interface TZProps {
  navigate: Function;
  goBack: Function;
}
const { width } = Dimensions.get('window');

type HeaderProps = {
  useBackIcon?: boolean;
  routeName?: string;
  useModalMenu?: boolean;
  useDrawerMenu?: boolean;
  useSearch?: boolean;
  useBorder?: boolean;
  navigation?: TZProps;
  route?: object;
  useElevation?: boolean;
  getHeaderSearchValue?: Function;
  headerKey?: string;
  searchOn?: boolean;
  header?: {
    search: {
      value: string;
      result: null | object;
    };
  };
};
const Header = (props: HeaderProps) => {
  const useBackIcon = props?.useBackIcon || false;
  const routeName = props?.routeName || '';
  const useModalMenu = props?.useModalMenu || false;
  const useDrawerMenu = props?.useDrawerMenu || false;
  const useSearch = props?.useSearch || false;
  const useBorder = props?.useBorder || false;
  const navigation = props?.navigation;
  const useElevation = props?.useElevation || false;
  // const headerKey = props?.headerKey || '';
  const setSearchValue =
    props?.getHeaderSearchValue ||
    function () {
      return null;
    };
  const searchValue = props?.header?.search?.value;
  const headerSearchClose = props?.headerSearchClose;
  const searchOn = props?.searchOn || false;
  console.log(navigation);
  const [searchOpen, setSearchOpen] = useState(searchOn);
  // const [modalOpen, setModalOpen] = useState(false);

  if (useDrawerMenu && useModalMenu) {
    throw new Error('Cannot use both drawerMenu and modalMenu');
  }
  if (useDrawerMenu && useSearch) {
    throw new Error('Cannot use both drawerMenu and searchMenu');
  }
  if (useDrawerMenu && useModalMenu && useSearch) {
    throw new Error('Cannot use all menus');
  }
  return (
    <Animated.View
      style={[
        styles.header,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderBottomWidth: useBorder ? 1.5 : 0,
          elevation: useElevation
            ? runTiming({
                from: 0,
                to: 10,
                easing: Easing.ease,
                duration: 300,
              })
            : 0,
        },
      ]}>
      <View style={styles.horizontalCenter}>
        {useBackIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backBtn}
            onPress={() => {
              if (typeof navigation?.goBack === 'function') {
                navigation?.goBack();
              }
              if (useSearch) {
                headerSearchClose(true);
              }
            }}>
            <Icon name={'arrow-back'} size={26} color={'white'} />
          </TouchableOpacity>
        )}
        {!searchOpen && (
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{routeName}</Text>
          </View>
        )}
      </View>
      {useDrawerMenu && (
        <TouchableOpacity
          style={styles.menu}
          activeOpacity={0.7}
          onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={35} color={Color.TEXTPRIMARY} />
        </TouchableOpacity>
      )}
      {useModalMenu && !useSearch && (
        <TouchableOpacity
          style={styles.menu}
          activeOpacity={0.7}
          onPress={() => setModalOpen(true)}>
          <Icon name={'more-vert'} size={30} color={Color.TEXTPRIMARY} />
        </TouchableOpacity>
      )}
      {useSearch && !searchOpen && (
        <View style={styles.horizontalCenter}>
          <TouchableOpacity
            style={styles.menu}
            activeOpacity={0.7}
            onPress={() => {
              setSearchOpen(true);
              headerSearchClose(false);
            }}>
            <Icon name={'search'} size={30} color={Color.TEXTPRIMARY} />
          </TouchableOpacity>
          {useModalMenu && (
            <TouchableOpacity
              style={styles.verticalMenu}
              activeOpacity={0.7}
              onPress={() => setModalOpen(true)}>
              <Icon name={'more-vert'} size={30} color={Color.TEXTPRIMARY} />
            </TouchableOpacity>
          )}
        </View>
      )}
      {useSearch && searchOpen && (
        <View
          style={[
            styles.horizontalCenter,
            {
              width: width * 0.7,
            },
          ]}>
          <TextInput
            selectTextOnFocus
            placeholder={'Search city...'}
            placeholderTextColor={Color.TEXTSECONDARY}
            value={searchValue}
            autoFocus={searchOn}
            onChangeText={(text) =>
              setSearchValue({ value: text, touched: true })
            }
            style={[
              styles.textInput,
              {
                width: width * 0.7 - 40,
              },
            ]}
          />
          <TouchableOpacity
            style={[styles.menu, styles.padLeft]}
            activeOpacity={0.7}
            onPress={() => {
              setSearchOpen(false);
              headerSearchClose(true);
            }}>
            <Icon name={'close'} size={30} color={Color.TEXTPRIMARY} />
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

const stateToProps = (state) => ({
  header: state.ui.header,
});

const dispatchToProps = {
  getHeaderSearchValue,
  headerSearchClose,
};
export default connect(stateToProps, dispatchToProps)(Header);
