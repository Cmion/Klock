import React from 'react';
import { Text, View, StyleProp } from 'react-native';
import Menu from '../../../Partials/Menu';
import styles from './styles';

const MenuSelector = ({
  title,
  selected,
  style,
}: {
  title: string;
  selected: string;
  style?: StyleProp<{}>;
}) => {
  return (
    <View style={[styles.container]}>
      <Menu
        style={[styles.menu]}
        textStyle={styles.menuText}
        menuItems={[
          { title: 'English', action: () => console.log('English') },
          { title: 'German', action: () => console.log('German') },
        ]}
        TriggerType={'feedback'}
        TriggerComponent={() => (
          <View style={style}>
            <Text style={styles.displayText}>{title}</Text>
            <Text style={styles.subText}>{selected}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MenuSelector;
