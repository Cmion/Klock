/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';
import Loader from '../../_shared/components/Partials/Loader';

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

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Timer View</Text>
      <Loader size={45} color={Color.PRIMARY} loading={true} />
    </View>
  );
};

export default Timer;
