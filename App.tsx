import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import RootStack from './src/Navigation/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
}
