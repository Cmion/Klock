import React, { useState } from 'react';
import { TouchableNativeFeedback, View, Text, StyleProp } from 'react-native';
import Radio from '../Radio';
import styles from './style';

const RadioGroup = ({
  items,
  onChange,
  label,
  style,
  selected: defaultValue,
}: {
  items: Array<{ label: string; value: any }>;
  onChange: Function;
  label: string;
  style: StyleProp<{}>;
  selected: number | string;
}) => {
  const [selected, setSelected] = useState(
    items.reduce(
      (prev: any, _, key: number) => ({
        ...prev,
        [`${label}_${key}`]: false,
        [`${label}_${defaultValue}`]: true,
      }),
      {},
    ),
  );
  const [current, setCurrent] = useState(`${label}_${defaultValue}`);

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
        items.map((item: any, key: number) => {
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
                        onChange(item?.value);
                      }
                    }}
                  />
                </View>
                <Text style={styles.displayText}>{item?.label}</Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
    </>
  );
};

export default RadioGroup;
