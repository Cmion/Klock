import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';
import Checkbox from '../../_shared/components/Partials/Checkbox';

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
const Stopwatch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stopwatch View</Text>
      <Checkbox checked={true} size={30} />
    </View>
  );
};

export default Stopwatch;
