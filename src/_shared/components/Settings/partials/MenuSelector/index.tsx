import React from 'react';
import { Text, View, StyleProp } from 'react-native';
import Menu from '../../../Partials/Menu';
import styles from './styles';

const MenuSelector = ({
  title,
  selected,
  style,
  data,
  action,
}: {
  title: string;
  selected: number;
  style?: StyleProp<{}>;
  data: Array<{ label: string; value: number }>;
  action: Function;
}) => {
  const rearrangedData = [
    (data || []).find((item: any) => item.value === selected),
    ...(data || []).filter((item) => item.value !== selected),
  ].map((_: any) => {
    return {
      title: _?.label,
      action: () => action(_?.value),
    };
  });
  return (
    <View style={[styles.container]}>
      <Menu
        style={[styles.menu]}
        textStyle={styles.menuText}
        menuItems={rearrangedData}
        TriggerType={'feedback'}
        highlightFirst
        TriggerComponent={() => (
          <View style={style}>
            <Text style={styles.displayText}>{title}</Text>
            <Text style={styles.subText}>
              {(data || []).find((item) => item.value === selected)?.label}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MenuSelector;
