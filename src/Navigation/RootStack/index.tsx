import React from 'react';
import Navigation from '../BottomTabs/index';
import CreateStackNav from '../../_shared/components/CreateStackNav';
import Header from '../../_shared/components/Partials/Header';
import Timezone from '../../_shared/components/Timezone';

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
                  route={props?.routes}
                  headerKey={'clock_timezone'}
                  useElevation={useElevation}
                  navigation={props?.navigation}
                  useSearch
                  useBorder
                  searchOn
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
