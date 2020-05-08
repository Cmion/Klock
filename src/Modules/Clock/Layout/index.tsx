import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Color from '../../../_shared/utils/Color';
import Font from '../../../_shared/utils/Font';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Button from '../../../_shared/components/Partials/Button';
import ClockUI from '../../../_shared/components/ClockUI';
import moment from 'moment';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Color.BACKGROUND,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 30,
    color: Color.PRIMARY,
    fontFamily: Font.NORMAL,
    marginBottom: 20,
  },
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 30,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.SMBOLD,
    fontSize: 20,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  currentDateAndAlarm: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width,
    paddingTop: 10,
  },
  currentDate: {
    fontSize: 18,
    fontFamily: Font.NORMAL,
    color: Color.TEXTPRIMARY,
    textTransform: 'uppercase',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  timezones: {paddingTop: 40},
  timezoneUi: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  tzLeft: {},
  tzName: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.NORMAL,
    fontSize: 16,
    paddingBottom: 20,
  },
  tzDate: {
    color: Color.TEXTSECONDARY,
    fontFamily: Font.NORMAL,
    fontSize: 14,
  },
  tzRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tzTime: {
    color: Color.TEXTPRIMARY,
    fontSize: 25,
    fontFamily: Font.MEDIUM,
  },
});

interface LayoutProps {
  route: object;
  navigation: object;
}
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
            setTime(new Date().setHours(e.hours, e.minutes, e.seconds));
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
        <View style={styles.timezoneUi}>
          <View style={styles.tzLeft}>
            <Text style={styles.tzName}>New York, US</Text>
            <Text style={styles.tzDate}>
              {moment(time).format('ddd, MMMM Do')}
            </Text>
          </View>
          <View style={styles.tzRight}>
            <Text style={styles.tzTime}>{moment(time).format('LT')}</Text>
          </View>
        </View>

        <View style={styles.timezoneUi}>
          <View style={styles.tzLeft}>
            <Text style={styles.tzName}>Lagos, NG</Text>
            <Text style={styles.tzDate}>
              {moment(time).add(7, 'hours').format('ddd, MMMM Do')}
            </Text>
          </View>
          <View style={styles.tzRight}>
            <Text style={styles.tzTime}>
              {moment(time).add(7, 'hours').format('LT')}
            </Text>
          </View>
        </View>

        <View style={styles.timezoneUi}>
          <View style={styles.tzLeft}>
            <Text style={styles.tzName}>Liverpool, UK</Text>
            <Text style={styles.tzDate}>
              {moment(time).add(6, 'hours').format('ddd, MMMM Do')}
            </Text>
          </View>
          <View style={styles.tzRight}>
            <Text style={styles.tzTime}>
              {moment(time).add(6, 'hours').format('LT')}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
