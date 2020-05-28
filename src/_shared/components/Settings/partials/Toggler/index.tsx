import React from 'react';
import { View, Text } from 'react-native';
import Switch from '../../../Partials/Switch';
import styles from './styles';

const Toggler = ({
  title,
  action,
  active,
  subTitle,
  style,
}: {
  title: string;
  action: Function;
  active: boolean;
  subTitle?: string;
  style?: StyleProp<{}>;
}) => {
  return (
    <View style={[style]}>
      <View style={styles.container}>
        <Text style={styles.displayText}>{title}</Text>
        <Switch
          onChangeValue={(value: boolean) => {
            if (typeof action === 'function') {
              action(value);
            }
          }}
          checked={active}
        />
      </View>
      {subTitle && (
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>{subTitle}</Text>
        </View>
      )}
    </View>
  );
};

export default Toggler;
