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
import Menu from '../Menu';
import { useNavigation } from '@react-navigation/native';

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
  const useSearch = props?.useSearch || false;
  const useBorder = props?.useBorder || false;
  const useElevation = props?.useElevation || false;
  const { navigate, goBack } = useNavigation();
  const menuItems = [
    {
      title: 'Settings',
      icon: 'settings',
      action: () => navigate('Settings'),
    },
    {
      title: 'Feedback/Help',
      icon: 'feedback',
      action: () => console.log('Feedback/Help'),
    },
  ];
  const setSearchValue =
    props?.getHeaderSearchValue ||
    function () {
      return null;
    };

  const searchValue = props?.header?.search?.value;
  const searchOn = props?.searchOn || false;

  const [searchOpen, setSearchOpen] = useState(searchOn);

  if (useModalMenu && useSearch) {
    throw new Error('Cannot use all menus');
  }
  return (
    <>
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
        <View style={[styles.horizontalCenter, styles.headerLeft]}>
          {useBackIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.backBtn}
              onPress={() => {
                if (useSearch) {
                  headerSearchClose(true);
                }
                goBack();
              }}>
              <Icon name={'arrow-back'} size={26} color={Color.HEADERICON} />
            </TouchableOpacity>
          )}
          {!searchOpen && !useBackIcon && (
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>{routeName}</Text>
            </View>
          )}
        </View>
        {!searchOpen && useBackIcon && !useSearch && (
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{routeName}</Text>
          </View>
        )}
        {!useSearch && (
          <Menu
            menuStyles={styles.menu}
            TriggerComponent={() => (
              <Icon name={'more-vert'} size={30} color={Color.HEADERICON} />
            )}
            menuItems={menuItems}
          />
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
              <Icon name={'search'} size={30} color={Color.HEADERICON} />
            </TouchableOpacity>
            {useModalMenu && (
              <Menu
                menuStyles={styles.menu}
                TriggerComponent={() => (
                  <Icon name={'more-vert'} size={30} color={Color.HEADERICON} />
                )}
                menuItems={menuItems}
              />
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
              placeholder={'Enter city...'}
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
              <Icon name={'close'} size={30} color={Color.HEADERICON} />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </>
  );
};

const stateToProps = (state: any) => ({
  header: state.ui.header,
});

const dispatchToProps = {
  getHeaderSearchValue,
  headerSearchClose,
};
export default connect(stateToProps, dispatchToProps)(Header);
