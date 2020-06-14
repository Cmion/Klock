import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';
import Slider from 'react-native-slider';

const { width } = Dimensions.get('window');
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
      <Slider
        style={{
          width: 350,
          height: 40,
        }}
        animateTransitions={true}
        value={5}
        minimumValue={0}
        maximumValue={7}
        step={1}
        thumbTintColor={Color.PRIMARY}
        minimumTrackTintColor={Color.PRIMARY}
        maximumTrackTintColor={Color.SECONDARY}
        thumbStyle={{
          borderWidth: 3,
          height: 25,
          width: 25,
          borderRadius: 25,
          borderColor: Color.BACKGROUND,
        }}
      />
    </View>
  );
};

export default Stopwatch;
