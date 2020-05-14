import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  SectionList,
} from 'react-native';
import Color from '../../utils/Color';
import Switch from '../Partials/Switch';
import Checkbox from '../Partials/Checkbox';
import Font from '../../utils/Font';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import 'react-native-get-random-values';
// import {v4 as uuidV4} from 'uuid';
import {getAll, insertOne, sort, prettify} from '../../utils/RealmDB';
// import LargeList from 'react-native-largelist-v3';

// import uuid from 'uuid/dist/esm-node/v5';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getItemLayout} from '../../utils/Helpers';
// import {ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: Color.BACKGROUND,
    // paddingTop: 40,
  },
});

class TimezoneList extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // marginVertical: 55 / 2,
          paddingHorizontal: 30,
          width: width - 20,
          height: 85,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            // marginHorizontal: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // paddingRight: 20,
            }}></View>
          <Text
            style={{
              color: Color.TEXTPRIMARY,
              fontSize: 16,
              fontFamily: Font.NORMAL,
            }}>
            Washington D.C
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Color.TEXTSECONDARY,
              fontFamily: Font.NORMAL,
              fontSize: 15,
            }}>
            {moment().format('LT')}
          </Text>
        </View>
      </View>
    );
  }
}
const Timezone = ({navigation, route, searchValue, timezoneDB}) => {
  const sectionRef = useRef();
  useEffect(() => {
    insertOne(timezoneDB, {
      _id: 'ci',
      country: "Côte d'Ivoire",
      countryCode: 'CI',
      long: -4.033333333333333,
      lat: 5.316666666666666,
      city: 'Abidjan',
      offsets: [0],
    });
    console.log(prettify(getAll(timezoneDB)));
    navigation.setParams({useElevation: false});
  }, []);
  // console.log(itemsLayout);
  const DATA = Array(0)
    .fill(0)
    .map((_, i) => ({
      title: String.fromCharCode(65 + i),
      data: Array(10).fill('Lagos'),
    }));
  const alpha = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(65 + i));
  return (
    <View
      style={[
        styles.container,
        {flexDirection: 'row', justifyContent: 'space-between'},
      ]}>
      <SectionList
        sections={DATA}
        ref={sectionRef}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <TimezoneList title={item} />}
        style={{paddingTop: 20}}
        onScrollToIndexFailed={(data) => console.log(data)}
        getItemLayout={(data, index) => {
          console.log(`getItemLayout called with index: ${index}`);
          return {length: 89, offset: 89 * index, index: index};
        }}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 50,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'search'}
                color={Color.TEXTSECONDARY}
                size={100}
                style={{
                  paddingVertical: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Font.NORMAL,
                  color: Color.TEXTPRIMARY,
                }}>
                Search for a City
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const stateToProps = (state) => ({
  searchValue: state?.ui?.header?.search?.value,
  timezoneDB: state?.db?.Timezones,
});
const dispatchToProps = {};
export default connect(stateToProps, dispatchToProps)(Timezone);
