import React, { useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Toggler from './partials/Toggler';
import ModalSelector from './partials/ModalSelector';
import MenuSelector from './partials/MenuSelector';
import styles from './styles';
import Color from '../../utils/Color';
import Slider from 'react-native-slider';
import { useNavigation } from '@react-navigation/native';
import { Collection } from '../../utils';
import { getAll, SETTINGS_GET_ALL } from '../../../redux/actions';
import { connect } from 'react-redux';
const { width } = Dimensions.get('window');

// eslint-disable-next-line no-shadow
const Settings = ({ getAll }: { getAll: Function }) => {
  const { addListener } = useNavigation();

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      getAll({
        db: Collection.SETTINGS,
        onSuccess: SETTINGS_GET_ALL,
      });
    });

    return unsubscribe;
  }, [addListener, getAll]);
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.text}>Clock</Text>
        </View>
        <View style={styles.itemsContainer}>
          <MenuSelector
            title={'Style'}
            selected={'Analog'}
            style={styles.menu}
          />
          <Toggler
            action={() => console.log('Display time with seconds')}
            title={'Display time with seconds'}
            active={true}
            style={[styles.items, { width: width - 10 }]}
          />
          <Toggler
            action={() => console.log('Automatic home clock')}
            title={'Automatic home clock'}
            active={true}
            style={[styles.items, { width: width - 10 }]}
            subTitle={`While traveling to area where the time is different from home add a clock for home.
            `}
          />

          <ModalSelector
            title={'Home time zone'}
            selected={'Los Angeles/America'}
            style={styles.menu}
          />
          <TouchableOpacity style={styles.clickable}>
            <Text style={styles.clickableText}>Change date and time</Text>
          </TouchableOpacity>

          <MenuSelector
            title={'Language'}
            selected={'German'}
            style={styles.menu}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.text}>Alarm</Text>
        </View>
        <View style={styles.itemsContainer}>
          <ModalSelector
            style={styles.items}
            title={'Silence after'}
            selected={'10 minutes'}
          />
          <ModalSelector
            style={styles.items}
            title={'Snooze length'}
            selected={'10 minutes'}
          />

          <MenuSelector
            title={'Start week on'}
            selected={'Sunday'}
            style={styles.items}
          />
          <View style={styles.clickable}>
            <Text style={[styles.clickableText, styles.volumeText]}>
              Volume
            </Text>
            <Slider
              style={{
                width: width - 80,
              }}
              animateTransitions={true}
              value={5}
              minimumValue={0}
              maximumValue={7}
              step={1}
              thumbTintColor={Color.PRIMARY}
              minimumTrackTintColor={Color.PRIMARY}
              maximumTrackTintColor={Color.SECONDARY}
              thumbStyle={styles.sliderThumbStyle}
            />
          </View>
          <MenuSelector
            title={'Volume buttons'}
            selected={'Control volume'}
            style={styles.items}
          />
          <MenuSelector
            title={'Gradually increase volume'}
            selected={'Never'}
            style={styles.items}
          />
          {/*TODO: Add slider for volume control */}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.text}>Timer</Text>
        </View>
        <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.clickable}>
            <Text style={styles.clickableText}>Timer sound</Text>
            <Text style={styles.clickableSubText}>Radar</Text>
          </TouchableOpacity>

          <MenuSelector
            title={'Gradually increase volume'}
            selected={'Never'}
            style={styles.items}
          />
          {/*TODO: Add slider for volume control */}
        </View>
      </View>
    </ScrollView>
  );
};

const stateToProps = (state: any) => ({
  settings: state.settings.current,
});
const dispatchToProps = {
  getAll,
};
export default connect(stateToProps, dispatchToProps)(Settings);
