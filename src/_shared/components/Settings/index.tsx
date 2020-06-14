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
import {
  findById,
  SETTINGS_FIND_BY_ID,
  updateById,
  SETTINGS_UPDATE_BY_ID,
} from '../../../redux/actions';
import { connect } from 'react-redux';
import { withZones as zones } from '../../../../assets/Timezone';
const { width } = Dimensions.get('window');

import {
  graduallyIncreaseVolume,
  weekStart,
  silenceAfter,
  snoozeLength,
  volumeButtons,
  clockStyle,
  locales,
} from './../../data/settings';

const Settings = ({
  // eslint-disable-next-line no-shadow
  findById,
  settings,
  updateById,
}: {
  findById: Function;
  updateById: Function;
  settings: any;
}) => {
  const { addListener } = useNavigation();

  useEffect(() => {
    // const unsubscribe = addListener('focus', () => {
    findById({
      db: Collection.SETTINGS,
      onSuccess: SETTINGS_FIND_BY_ID,
      id: 'app',
    });
    // });

    // return unsubscribe;
  }, [addListener, findById]);

  const handleChange = (value: boolean | string | number, type: string) => {
    updateById({
      db: Collection.SETTINGS,
      onSuccess: SETTINGS_UPDATE_BY_ID,
      data: { [type]: value },
      id: 'app',
    });
  };
  console.log(settings?.display_time_with_seconds);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.text}>Clock</Text>
        </View>
        <View style={styles.itemsContainer}>
          <MenuSelector
            title={'Style'}
            selected={settings?.clock_style}
            style={styles.menu}
            data={clockStyle}
            action={(value: number) => handleChange(value, 'clock_style')}
          />
          <Toggler
            title={'Display time with seconds'}
            active={settings?.display_time_with_seconds}
            style={[styles.items, { width: width - 10 }]}
            action={(value: boolean) =>
              handleChange(value, 'display_time_with_seconds')
            }
          />
          <Toggler
            action={(value: boolean) =>
              handleChange(value, 'automatic_home_clock')
            }
            title={'Automatic home clock'}
            active={settings?.automatic_home_clock}
            style={[styles.items, { width: width - 10 }]}
            subTitle={`While traveling to area where the time is different from home add a clock for home.
            `}
          />

          <ModalSelector
            title={'Home time zone'}
            selected={
              (zones || []).find(
                (zone: any) => zone.text === settings?.home_time_zone,
              )?.text
            }
            style={styles.menu}
            data={(zones || []).map((value: any) => {
              return { ...value, label: value?.text, value: value?.text };
            })}
            action={(value: string) => handleChange(value, 'home_time_zone')}
          />
          <TouchableOpacity style={styles.clickable}>
            <Text style={styles.clickableText}>Change date and time</Text>
          </TouchableOpacity>

          <MenuSelector
            title={'Language'}
            selected={1}
            data={locales}
            style={styles.menu}
            action={(value: number) => handleChange(value, 'language')}
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
            selected={1}
            data={silenceAfter}
            action={(value: number) =>
              handleChange(value, 'alarm_silence_after')
            }
          />
          <ModalSelector
            style={styles.items}
            title={'Snooze length'}
            selected={1}
            data={snoozeLength}
            action={(value: number) =>
              handleChange(value, 'alarm_snooze_length')
            }
          />

          <MenuSelector
            title={'Start week on'}
            selected={1}
            style={styles.items}
            data={weekStart}
            action={(value: number) => handleChange(value, 'alarm_week_start')}
          />
          <View style={styles.clickable}>
            <Text style={[styles.clickableText]}>Volume</Text>
            <Slider
              style={{
                width: width - 80,
              }}
              animateTransitions={true}
              value={settings?.alarm_volume}
              minimumValue={0}
              maximumValue={7}
              step={1}
              useNativeDriver
              thumbTintColor={Color.PRIMARY}
              minimumTrackTintColor={Color.PRIMARY}
              maximumTrackTintColor={Color.SECONDARY}
              thumbStyle={styles.sliderThumbStyle}
              // onValueChange={(value: number) => {
              //  // handleChange(value, 'alarm_volume');
              // }}
            />
          </View>
          <MenuSelector
            title={'Volume buttons'}
            selected={1}
            style={styles.items}
            data={volumeButtons}
            action={(value: number) =>
              handleChange(value, 'alarm_volume_buttons')
            }
          />
          <MenuSelector
            title={'Gradually increase volume'}
            selected={1}
            style={styles.items}
            data={graduallyIncreaseVolume}
            action={(value: number) =>
              handleChange(value, 'alarm_increase_volume')
            }
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

          <ModalSelector
            title={'Gradually increase volume'}
            selected={1}
            style={styles.items}
            data={graduallyIncreaseVolume}
            action={(value: number) =>
              handleChange(value, 'timer_increase_volume')
            }
          />
          {/*TODO: Add slider for volume control */}
        </View>
      </View>
    </ScrollView>
  );
};

const stateToProps = (state: any) => ({
  settings: state.settings?.app,
  zones: state.timezone.zone.byList,
});
const dispatchToProps = {
  findById,
  updateById,
};
export default connect(stateToProps, dispatchToProps)(Settings);
