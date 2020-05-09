import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Color from '../../../_shared/utils/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../_shared/components/Partials/Button';
import ClockUI from '../../../_shared/components/ClockUI';
import moment from 'moment';
import styles from './styles';

const {width, height} = Dimensions.get('window');


interface LayoutProps {
  route: object;
  navigation: object;
}
const timezones = [
  {
    city: 'New York',
    code: 'US',
    country: 'United States of America',
    offsets: {inMinutes: -5 * 60},
  },
  {
    city: 'Lagos',
    code: 'NG',
    country: 'Nigeria',
    offsets: {inMinutes: 1 * 60},
  },
  {
    city: 'Abu Dhabi',
    code: 'UAE',
    country: 'United Arab Emirates',
    offsets: {inMinutes: 3 * 60},
  },
  {
    city: 'Canberra',
    code: 'AUS',
    country: 'Australia',
    offsets: {inMinutes: 10 * 60},
  },
  {
    city: 'Paris',
    code: 'Fr',
    country: 'France',
    offsets: {inMinutes: 1 * 60},
  },
  {
    city: 'New Chuch',
    code: 'NZ',
    country: 'New Zeland',
    offsets: {inMinutes: 9 * 60},
  },
  {
    city: 'Los Angeles',
    code: 'US',
    country: 'United States of America',
    offsets: {inMinutes: -8 * 60},
  },
  {
    city: 'Hong-Kong',
    code: 'PRC',
    country: 'China',
    offsets: {inMinutes: 7 * 60},
  },
];

export default ({route, navigation}: LayoutProps) => {
  const [time, setTime] = useState(new Date().valueOf());
  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      indicatorStyle={'white'}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Clock</Text>
        </View>
        <TouchableOpacity style={styles.menu} activeOpacity={0.4}>
          <Icon name={'menu'} size={35} color={Color.TEXTPRIMARY} />
        </TouchableOpacity>
      </View>
      <View style={styles.clockContainer}>
        <ClockUI
          size={width - 150}
          borderWidth={12}
          onTimeChange={(e: object) => {
            console.log(e);
            setTime(e);
          }}
          useWatch
          watchUnit={'minutes'}
        />
      </View>
      <View style={styles.currentDateAndAlarm}>
        <Text style={styles.currentDate}>
          {moment(time).format('ddd, DD, MMMM')}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={'Add New'}
          onPress={() => {
            navigation.navigate('Timezone');
          }}
          icon={({color}) => <Icon name={'language'} size={30} color={color} />}
        />
      </View>

      <View style={styles.timezones}>
        {timezones.map(({city, code, offsets}, key) => {
          const cTime = moment
            .utc()
            .add(offsets.inMinutes, 'minutes')
            .set({...time});
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
              <View style={styles.divider} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
