import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import CreateStackNav from '../../_shared/utils/CreateStackNav';
import Layout from './Layout';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';

interface TZProps {
  navigation: Required<{
    navigate: Function;
  }>;
}
const TimeZone = ({navigation}: TZProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Timezone View</Text>
    <Button
      title={'Navigate to Layout'}
      onPress={() => {
        navigation.navigate('Layout');
      }}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 30,
    color: Color.PRIMARY,
    fontFamily: Font.NORMAL,
    marginBottom: 20,
  },
});
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
            component: TimeZone,
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
