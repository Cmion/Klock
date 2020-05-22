import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../../../utils/Color';

const EmptyListRenderer = () => {
  return (
    <View style={styles.emptyListContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name={'search'}
          color={Color.TEXTSECONDARY}
          size={100}
          style={styles.icon}
        />
        <Text style={styles.emptySearchText}>Search for a City</Text>
      </View>
    </View>
  );
};
export default EmptyListRenderer;
