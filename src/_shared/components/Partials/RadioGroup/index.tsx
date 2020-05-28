import React, { useState } from 'react';
import { TouchableNativeFeedback, View, Text, StyleProp } from 'react-native';
import Radio from '../Radio';
import styles from './style';

const RadioGroup = ({
  items,
  onChange,
  label,
  style,
}: {
  items: Array<{ label: string; value: any }>;
  onChange: Function;
  label: string;
  style: StyleProp<{}>;
}) => {
  const [selected, setSelected] = useState(
    items.reduce(
      (prev: any, _, key: number) => ({ ...prev, [`${label}_${key}`]: false }),
      {},
    ),
  );
  const [current, setCurrent] = useState('');

  const handleRadioSelect = (key: string) => {
    setSelected((prev: any) => ({
      ...prev,
      [key]: true,
      ...(current ? { [current]: false } : {}),
    }));
  };

  return (
    <>
      {items &&
        Array.isArray(items) &&
        items.map((value: any, key: number) => {
          return (
            <TouchableNativeFeedback key={key} style={[styles.container]}>
              <View style={[styles.main, style]}>
                <View style={styles.radioContainer}>
                  <Radio
                    isSelected={selected[`${label}_${key}`]}
                    onPress={() => {
                      handleRadioSelect(`${label}_${key}`);
                      setCurrent(`${label}_${key}`);
                      if (onChange && typeof onChange === 'function') {
                        onChange(value);
                      }
                    }}
                  />
                </View>
                <Text style={styles.displayText}>Analog</Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
    </>
  );
};

export default RadioGroup;
