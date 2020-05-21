import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import RootStack from './src/Navigation/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
