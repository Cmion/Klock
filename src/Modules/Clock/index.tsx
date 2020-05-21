import React from 'react';
import {StatusBar, Dimensions} from 'react-native';
import CreateStackNav from '../../_shared/components/CreateStackNav';
import CreateDrawerNav from '../../_shared/components/CreateDrawerNav';
import Layout from './Layout';
import Color from '../../_shared/utils/Color';
import Timezone from '../../_shared/components/Timezone';
import Header from '../../_shared/components/Partials/Header';

const {width} = Dimensions.get('window');
const Drawer = () => (
  <CreateDrawerNav
    config={[
      {
        component: Layout,
        name: 'Clock',
      },
    ]}
    navigatorProps={{
      drawerStyle: {
        width,
      },
    }}
  />
);
const Clock = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Color.BACKGROUND}
        translucent={true}
      />
      <CreateStackNav
        config={[
          {
            name: 'Clock',
            component: Drawer,
            screenOptions: {
              options: {
                headerStyle: {backgroundColor: 'transparent'},
                header: ({routes, navigation}) => {
                  return (
                    <Header
                      useDrawerMenu
                      routeName={'Clock'}
                      navigation={navigation}
                    />
                  );
                },
              },
            },
          },
        ]}
        navigatorProps={{
          screenOptions: {
            headerShown: true,
            gestureEnabled: true,
          },
        }}
      />
    </>
  );
};

export default Clock;
