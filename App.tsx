import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import CreateStackNav from './src/_shared/components/CreateStackNav';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import RootStack from './src/Navigation/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
