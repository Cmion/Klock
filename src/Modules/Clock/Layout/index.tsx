import React, {useState, useMemo} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Color from '../../../_shared/utils/Color';
import {CLOCKSIZE} from '../../../_shared/utils/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../_shared/components/Partials/Button';
import ClockUI from '../../../_shared/components/ClockUI';
import moment from 'moment';
import styles from './styles';
import Animated from 'react-native-reanimated';
import Interactable from '../../../_shared/components/Interactable';

const {width, height} = Dimensions.get('window');

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
    offsets: {inMinutes: -5 * 60},
  },
  {
    city: 'Algiers',
    code: 'DZ',
    country: 'Algeria',
    offsets: {inMinutes: 1 * 60},
  },
  {
    city: 'Almaty',
    code: 'KZ',
    country: 'Kazakhstan',
    offsets: {inMinutes: 6 * 60},
  },
  {
    city: 'Amman',
    code: 'JO',
    country: 'Jordan',
    offsets: {inMinutes: 2 * 60},
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

export default ({navigation}: LayoutProps) => {
  const [time, setTime] = useState({});
  const deltaY: Animated.Value<number> = useMemo(
    () => new Animated.Value(0),
    [],
  );
  const [canScroll, setCanScroll] = useState(false);

  const {onScroll, onSnap} = useMemo(
    () => ({
      onSnap: (event) => {
        const {id} = event.nativeEvent;
        if (id === 'bottom') {
          setCanScroll(true);
        }
      },
      onScroll: (event: object) => {
        const {contentOffset} = event.nativeEvent;
        if (contentOffset.y === 0) {
          setCanScroll(false);
        }
        // console.log(contentOffset);
      },
    }),
    [],
  );

  const HEIGHT = height * 0.5;
  //Todo: Check scaling and tranformation values on different screens as it depends on screen width|height
  return (
    <View style={styles.container}>
      <View
        style={{
          height: HEIGHT,
          width,
        }}>
        <Animated.View
          style={[
            styles.clockContainer,
            {
              transform: [
                {
                  translateY: deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-58, -58, 0, 0],
                  }),
                },
                {
                  scale: deltaY.interpolate({
                    inputRange: [-(width * 0.7), -(width * 0.7), 0, 0],
                    outputRange: [0, 0, 1, 1],
                  }),
                },
              ],
            },
          ]}>
          <ClockUI
            size={CLOCKSIZE}
            borderWidth={12}
            onTimeChange={(e: object) => {
              setTime(e);
            }}
            useWatch
            watchUnit={'minutes'}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: deltaY.interpolate({
                  inputRange: [-(width * 0.9), -(width * 0.9), 0, 0],
                  outputRange: [-(width * 0.9), -(width * 0.9), 0, 0],
                }),
              },
            ],
          }}>
          <View style={styles.currentDateAndAlarm}>
            <Text style={[styles.currentDate]}>
              {moment()
                .set({...time})
                .format('ddd DD, MMMM')}{' '}
            </Text>
          </View>
        </Animated.View>
      </View>
      <Interactable.View
        verticalOnly={true}
        snapPoints={[{y: 0}, {y: -height * 0.45, id: 'bottom'}]}
        boundaries={{top: -height * 0.45}}
        onSnap={onSnap}
        animatedValueY={deltaY}>
        <ScrollView
          style={styles.scrollView}
          bounces={false}
          canCancelContentTouches={canScroll}
          scrollEventThrottle={16}
          onScroll={onScroll}
          indicatorStyle={'white'}>
          <View style={styles.timezones}>
            {timezones.map(({city, code, offsets}, key) => {
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
                  <View style={styles.divider} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </Interactable.View>
      <View style={styles.btnContainer}>
        <Button
          icon={() => (
            <Icon name={'language'} size={35} color={Color.BACKGROUND} />
          )}
          height={60}
          title={''}
          width={60}
          borderRadius={60}
          onPress={() => {
            navigation.navigate('Timezone');
          }}
        />
      </View>
    </View>
  );
};
