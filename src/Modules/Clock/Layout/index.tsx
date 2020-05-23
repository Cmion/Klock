import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Color from '../../../_shared/utils/Color';
import { CLOCKSIZE } from '../../../_shared/utils/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../_shared/components/Partials/Button';
import ClockUI from '../../../_shared/components/ClockUI';
import moment from 'moment';
import styles from './styles';
import * as Localize from 'react-native-localize';

import {
  parseDST,
  timeDifferenceInWords,
  TABBARHEIGHT,
  Collection,
  getZoneName,
  debounce,
} from '../../../_shared/utils';
import { Cities } from '../../../_shared/utils/Types';
import { connect } from 'react-redux';
import {
  findAll,
  CITY_FIND_ALL_SELECTED,
  cityReset,
} from '../../../redux/actions';
import { useNavigation } from '@react-navigation/native';

interface LayoutProps {
  findAll: Function;
  cities: Array<Cities>;
}

//TODO: Make Current Date Sticky.
// eslint-disable-next-line no-shadow
const Layout = ({ findAll, cities }: LayoutProps) => {
  const [time, setTime] = useState({});
  const [timezoneName, setTimezoneName] = useState(getZoneName());
  const { navigate, addListener } = useNavigation();

  const setTimezoneNameDebounced = useMemo(
    () => debounce(() => setTimezoneName(getZoneName())),
    [],
  );
  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      findAll({
        db: Collection.CITY,
        onSuccess: CITY_FIND_ALL_SELECTED,
        queryString: 'isSelected = true',
        sort: { order: 'desc', param: 'updatedAt' },
      });
    });

    Localize.addEventListener('change', () => {
      setTimezoneName(getZoneName());
    });

    return unsubscribe;
  }, [findAll, addListener, setTimezoneNameDebounced]);

  const zoneAbbr = timezoneName.zoneAbbr;
  const zoneName = timezoneName.zoneName;

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

          <View style={styles.currentDateAndAlarm}>
            <Text style={[styles.currentDate]}>
              {moment()
                .set({ ...time })
                .format('ddd, MMMM DD')}{' '}
            </Text>
            <View style={styles.zoneName}>
              <Text style={[styles.zoneNameText]}>
                {zoneName} ({zoneAbbr})
              </Text>
            </View>
          </View>

          <View style={styles.timezones}>
            {cities.map((item: Cities, key: number, array: Array<Cities>) => {
              const { city_short, utcOffset, dst } = item;
              const cityTimeToLocal = parseDST({
                dst,
                utcOffset,
                setter: moment({ ...time }),
                keepLocalTime: true,
              });
              const cityTime = parseDST({
                dst,
                utcOffset,
                setter: moment({ ...time }),
                keepLocalTime: false,
              });
              return (
                <View key={key}>
                  <View style={styles.timezoneUi}>
                    <View style={styles.tzLeft}>
                      <Text style={styles.tzName}>{`${city_short}`}</Text>
                      <Text style={styles.tzDate}>
                        {timeDifferenceInWords(cityTimeToLocal, moment())}
                      </Text>
                    </View>
                    <View style={styles.tzRight}>
                      <Text style={styles.tzTime}>{cityTime.format('LT')}</Text>
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
          height={50}
          title={''}
          width={50}
          borderRadius={50}
          onPress={() => {
            navigate('Timezone');
          }}
        />
      </View>
    </View>
  );
};

const stateToProps = (state: any) => ({
  cities: state?.timezone?.city?.selected?.byList,
});
const dispatchToProps = {
  findAll,
  cityReset,
};
export default connect(stateToProps, dispatchToProps)(Layout);
