import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleProp,
} from 'react-native';
import Animated, { cond, eq } from 'react-native-reanimated';
import Modal from 'react-native-modal';
import { onScrollEvent } from '../../../../utils';
import styles from './styles';
import Color from '../../../../utils/Color';
import RadioGroup from '../../../Partials/RadioGroup';

const { height, width } = Dimensions.get('window');
const ModalSelector = ({
  title,
  selected,
  style,
  data,
  action,
}: {
  title: string;
  selected: number | string | undefined;
  style?: StyleProp<{}>;
  action: Function;
  data: Array<{ label: string; value: number }>;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const top = new Animated.Value(0);
  const scrollEvent = onScrollEvent({ y: top });

  // useCode(() => call([top], console.log), [top]);
  return (
    <>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => {
          setModalOpen(true);
        }}>
        <Text style={styles.displayText}>{title}</Text>
        <Text style={styles.subText}>
          {(data || []).find((item: any) => item.value === selected)?.label}
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={modalOpen}
        backdropColor={Color.DARK}
        style={styles.modal}
        onBackdropPress={() => setModalOpen(false)}
        onBackButtonPress={() => setModalOpen(false)}
        backdropOpacity={0.5}>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={Color.alphaDark(0.5)}
        />
        <View
          style={[
            styles.modalContainer,
            {
              width: width * 0.85,
              maxHeight: height * 0.8,
            },
          ]}>
          <Animated.View
            style={[
              styles.modalHeader,
              { borderBottomWidth: cond(eq(top, 0), 0, 1) },
            ]}>
            <Text style={styles.headerText}>{title}</Text>
          </Animated.View>
          <Animated.ScrollView
            onScroll={scrollEvent}
            contentContainerStyle={styles.scroll}>
            <RadioGroup
              label={title}
              // eslint-disable-next-line no-shadow
              onChange={(selected: any) => {
                action(selected);
              }}
              selected={(data || []).findIndex(
                (item) => item.value === selected,
              )}
              style={styles.radioGroup}
              items={data}
            />
          </Animated.ScrollView>
          <View style={styles.modalFooter}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text style={styles.footerText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalSelector;
