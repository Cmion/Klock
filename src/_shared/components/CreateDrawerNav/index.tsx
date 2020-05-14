/* eslint-disable prettier/prettier */
import React, {ComponentType} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

interface DrawerConfig {
  component: ComponentType;
  name: string;
  initialParams?: object;
  drawerProps?: object;
}
const Main = ({
  config = [],
  navigatorProps = {},
}: {
  config: Array<DrawerConfig>;
  navigatorProps: object;
}) => {
  const navProps =
    Object.prototype.toString.call(navigatorProps) === '[object Object]'
      ? navigatorProps
      : {};
  return (
    <Drawer.Navigator {...navProps}>
      {(config || []).map((value, key) => {
        const initialParams: object = value?.initialParams || {};
        const component = value?.component;
        const name: string = value?.name;
        const drawerProps: object = value?.drawerProps || {};

        return (
          <Drawer.Screen
            key={key}
            name={name}
            component={component}
            initialParams={initialParams}
            {...drawerProps}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default Main;
