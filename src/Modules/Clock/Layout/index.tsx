import React, { useState, useMemo } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import Color from '../../../_shared/utils/Color';
import { CLOCKSIZE } from '../../../_shared/utils/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../_shared/components/Partials/Button';
import ClockUI from '../../../_shared/components/ClockUI';
import moment from 'moment';
import styles from './styles';
import Animated from 'react-native-reanimated';
import { TABBARHEIGHT } from './../../../_shared/utils/Constants';

interface LayoutProps {
  route: object;
  navigation: {
    navigate: Function;
  };
}
const timezones = [
  {
    city: 'New York',
    code: 'US',
    country: 'United States of America',
    offsets: { inMinutes: -5 * 60 },
  },
  {
    city: 'Algiers',
    code: 'DZ',
    country: 'Algeria',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'Almaty',
    code: 'KZ',
    country: 'Kazakhstan',
    offsets: { inMinutes: 6 * 60 },
  },
  {
    city: 'Amman',
    code: 'JO',
    country: 'Jordan',
    offsets: { inMinutes: 2 * 60 },
  },
  {
    city: 'Lagos',
    code: 'NG',
    country: 'Nigeria',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'Abu Dhabi',
    code: 'UAE',
    country: 'United Arab Emirates',
    offsets: { inMinutes: 3 * 60 },
  },
  {
    city: 'Canberra',
    code: 'AUS',
    country: 'Australia',
    offsets: { inMinutes: 10 * 60 },
  },
  {
    city: 'Paris',
    code: 'Fr',
    country: 'France',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'New Chuch',
    code: 'NZ',
    country: 'New Zeland',
    offsets: { inMinutes: 9 * 60 },
  },
  {
    city: 'Los Angeles',
    code: 'US',
    country: 'United States of America',
    offsets: { inMinutes: -8 * 60 },
  },
  {
    city: 'Hong-Kong',
    code: 'PRC',
    country: 'China',
    offsets: { inMinutes: 7 * 60 },
  },
  {
    city: 'New York',
    code: 'US',
    country: 'United States of America',
    offsets: { inMinutes: -5 * 60 },
  },
  {
    city: 'Algiers',
    code: 'DZ',
    country: 'Algeria',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'Almaty',
    code: 'KZ',
    country: 'Kazakhstan',
    offsets: { inMinutes: 6 * 60 },
  },
  {
    city: 'Amman',
    code: 'JO',
    country: 'Jordan',
    offsets: { inMinutes: 2 * 60 },
  },
  {
    city: 'Lagos',
    code: 'NG',
    country: 'Nigeria',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'New York',
    code: 'US',
    country: 'United States of America',
    offsets: { inMinutes: -5 * 60 },
  },
  {
    city: 'Algiers',
    code: 'DZ',
    country: 'Algeria',
    offsets: { inMinutes: 1 * 60 },
  },
  {
    city: 'Almaty',
    code: 'KZ',
    country: 'Kazakhstan',
    offsets: { inMinutes: 6 * 60 },
  },
  {
    city: 'Amman',
    code: 'JO',
    country: 'Jordan',
    offsets: { inMinutes: 2 * 60 },
  },
  {
    city: 'Lagos',
    code: 'NG',
    country: 'Nigeria',
    offsets: { inMinutes: 1 * 60 },
  },
];
//TODO: Make Current Date Sticky.
export default ({ navigation }: LayoutProps) => {
  const [time, setTime] = useState({});

  //TODO: Check scaling and tranformation values on different screens as it depends on screen width|height
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        contentContainerStyle={{
          paddingBottom: TABBARHEIGHT,
        }}
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
        indicatorStyle={'white'}>
        <>
          <View style={[styles.clockContainer]}>
            <ClockUI
              size={CLOCKSIZE}
              borderWidth={CLOCKSIZE * 0.025}
              onTimeChange={(e: object) => {
                setTime(e);
              }}
              useWatch
              watchUnit={'minutes'}
            />
          </View>
          <View>
            <View style={styles.currentDateAndAlarm}>
              <Text style={[styles.currentDate]}>
                {moment()
                  .set({ ...time })
                  .format('ddd DD, MMMM')}{' '}
              </Text>
            </View>
          </View>
          <View style={styles.timezones}>
            {timezones.map(({ city, code, offsets }, key, array) => {
              const cTime = moment.utc().add(offsets.inMinutes, 'minutes');
              return (
                <View key={key}>
                  <View style={styles.timezoneUi}>
                    <View style={styles.tzLeft}>
                      <Text style={styles.tzName}>{`${city}, ${code}`}</Text>
                      <Text style={styles.tzDate}>
                        {cTime.format('ddd, MMMM Do')}
                      </Text>
                    </View>
                    <View style={styles.tzRight}>
                      <Text style={styles.tzTime}>{cTime.format('LT')}</Text>
                    </View>
                  </View>
                  {key < array.length - 1 && <View style={styles.divider} />}
                </View>
              );
            })}
          </View>
        </>
      </ScrollView>

      <View style={styles.btnContainer}>
        <Button
          icon={() => (
            <Icon name={'language'} size={30} color={Color.BACKGROUND} />
          )}
          height={55}
          title={''}
          width={55}
          borderRadius={55}
          onPress={() => {
            navigation.navigate('Timezone');
          }}
        />
      </View>
    </View>
  );
};
