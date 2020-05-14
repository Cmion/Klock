/* eslint-disable prettier/prettier */
import React, {ComponentType} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stacks = createStackNavigator();
type StackConfig = {
  component: ComponentType<{
    route: object;
    navigation: object;
  }>;
  name: string;
  initialParams?: object;
  screenOptions?: object;
};
interface Stack {
  config: Array<StackConfig>;
  navigatorProps?: object;
}
const Main = ({config, navigatorProps}: Stack) => {
  const navProps =
    Object.prototype.toString.call(navigatorProps) === '[object Object]'
      ? navigatorProps
      : {};
  return (
    <Stacks.Navigator {...navProps}>
      {config.map((value, key) => {
        const initialParams: object = value?.initialParams || {};
        const component = value?.component;
        const name: string = value?.name || `Stack_${key}`;
        const screenOptions: object = value?.screenOptions || {};

        return (
          <Stacks.Screen
            key={key}
            name={name}
            component={component}
            initialParams={initialParams}
            {...screenOptions}
          />
        );
      })}
    </Stacks.Navigator>
  );
};

export default Main;
