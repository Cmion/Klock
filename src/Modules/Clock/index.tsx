import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import CreateStackNav from '../../_shared/utils/CreateStackNav';
import CreateDrawerNav from '../../_shared/utils/CreateDrawerNav';
import Layout from './Layout';
import Color from '../../_shared/utils/Color';
import Timezone from '../../_shared/components/Timezone';

interface TZProps {
  navigation: Required<{
    navigate: Function;
  }>;
}

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
            name: 'Layout',
            component: Layout,
          },
          {
            name: 'Timezone',
            component: Timezone,
          },
        ]}
        navigatorProps={{
          headerMode: 'none',
          mode: 'modal',
          screenOptions: {
            headerShown: 'false',
          },
        }}
      />
    </>
  );
};

export default Clock;
