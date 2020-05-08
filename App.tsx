import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screens from './src/Modules';
import Color from './src/_shared/utils/Color';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Color.PRIMARY,
        inactiveTintColor: Color.TEXTSECONDARY,
        style: {
          backgroundColor: Color.DARK,
          borderTopWidth: 0,
          height: 70,
          overflow: 'hidden',
        },
      }}>
      {Screens.map(({component, name, icon}, key) => {
        return (
          <Tab.Screen
            key={key}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({color, focused}) => {
                return <Icon name={icon} size={30} color={color} />;
              },
              tabBarAccessibilityLabel: name,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
