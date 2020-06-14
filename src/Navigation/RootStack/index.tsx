import React from 'react';
import Navigation from '../BottomTabs/index';
import CreateStackNav from '../../_shared/components/CreateStackNav';
import Header from '../../_shared/components/Partials/Header';
import Timezone from '../../_shared/components/Timezone';
import Settings from '../../_shared/components/Settings';

const RootStack = () => (
  <CreateStackNav
    config={[
      {
        component: Navigation,
        name: 'Root Navigation',
        screenOptions: {
          options: {
            headerShown: false,
          },
        },
      },
      {
        name: 'Timezone',
        component: Timezone,
        screenOptions: {
          options: {
            headerStyle: { backgroundColor: 'transparent' },
            header: (props: any) => {
              const useElevation = props?.scene?.route?.params?.useElevation;
              return (
                <Header
                  useBackIcon
                  routeName={'Timezone'}
                  headerKey={'clock_timezone'}
                  useElevation={useElevation}
                  navigation={props?.navigation}
                  useSearch
                  useBorder
                  searchOn
                  headerMenu={['default']}
                />
              );
            },
          },
        },
      },
      {
        name: 'Settings',
        component: Settings,
        screenOptions: {
          options: {
            headerStyle: { backgroundColor: 'transparent' },
            header: (props: any) => {
              return (
                <Header
                  useBackIcon
                  routeName={'Settings'}
                  headerKey={'clock_settings'}
                  navigation={props?.navigation}
                  useBorder
                  headerMenu={['Send feedback', 'Help']}
                />
              );
            },
          },
        },
      },
    ]}
    navigatorProps={
      {
        //   screenOptions: {
        //     headerShown: false,
        //   },
      }
    }
  />
);

export default RootStack;
