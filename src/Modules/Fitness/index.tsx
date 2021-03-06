/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';

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
  },
});
const Fitness = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fitness View</Text>
    </View>
  );
};

export default Fitness;
