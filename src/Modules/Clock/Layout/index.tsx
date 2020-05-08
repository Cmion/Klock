import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Color from '../../../_shared/utils/Color';
import Font from '../../../_shared/utils/Font';

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
export default ({route, navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Layout View</Text>
    <Button
      title={'Timezone'}
      onPress={() => {
        navigation.navigate('Timezone');
      }}
    />
  </View>
);
