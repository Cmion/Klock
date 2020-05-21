import React, {useEffect} from 'react';
import Screens from '../../Modules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Color from '../../_shared/utils/Color';
import {connect} from 'react-redux';

import TabbarComponent from './TabbarComponent';
const Tab = createBottomTabNavigator();

// eslint-disable-next-line no-shadow
const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabbarComponent {...props} />}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Color.PRIMARY,
        inactiveTintColor: Color.TEXTSECONDARY,
      }}>
      {Screens.map(({component, name, icon}, key) => {
        return (
          <Tab.Screen
            key={key}
            name={name}
            component={component}
            initialParams={{
              icon: icon,
            }}
            options={{
              tabBarAccessibilityLabel: name,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const dispatchToProps = {};
export default connect(null, dispatchToProps)(BottomTabs);
