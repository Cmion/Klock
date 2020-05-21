/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';
import {debounce} from '../../_shared/utils/Helpers';
import {Collection} from '../../_shared/utils/Constants';

import {
  openDB,
  // findById,
  // findAll,
  deleteAll,
  // deleteOne,
  // // insetOne,
  getAll,
  // findOne,
  // updateOne,
  // updateById,
  // updateMany,
  // sort,
  // prettify,
  // deleteMany,
  // deleteById,
  AppConfig,
  CityConfig,
  TimezoneConfig,
  prettify,
} from '../../_shared/utils/RealmDB';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {
  insertOne,
  ZONE_INSERT_ONE,
  ZONE_INSERT_MANY,
  CITY_INSERT_ONE,
  CITY_INSERT_MANY,
  CITY_FIND_ALL,
  findAll,
  CITY_FIND_BY_ID,
  findById,
  insertMany,
} from '../../redux/actions';

import {connect} from 'react-redux';
import {findOne} from './../../redux/actions/db';
import {CITY_FIND_ONE} from './../../redux/actions/timezone/city';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 30,
    color: Color.PRIMARY,
    fontFamily: Font.NORMAL,
  },
});

const Alarm = ({
  insertOne,
  insertMany,
  zoneDB,
  zoneData,
  cityDB,
  cityData,
  findOne,
  findAll,
}: {
  insertOne: Function;
  // database: {db: Realm; name: string};
}) => {
  const [value, setValue] = React.useState('');
  const search = React.useMemo(
    () =>
      debounce(
        (text: string) => {
          findAll({
            onSuccess: CITY_FIND_ALL,
            db: Collection.CITY,
            queryString: `city BEGINSWITH[c] "${text || null}"`,
            sort: {
              param: 'city',
              order: 'desc',
            },
          });
        },
        500,
        false,
      ),
    [],
  );
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={value}
          onChangeText={(text) => {
            search(text);
            console.log(text);
            setValue(text);
          }}
          style={{
            height: 70,
            width: 200,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            color: 'white',
            fontSize: 16,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(
            prettify(
              getAll(
                openDB(
                  CityConfig.path,
                  CityConfig.schema,
                  CityConfig.schemaVersion,
                  CityConfig.migration,
                ),
              ),
            ),
          );
        }}>
        <Text style={{fontSize: 30, color: 'orange'}}>Find</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // deleteAll(zoneDB);
          deleteAll(
            openDB(
              TimezoneConfig.path,
              TimezoneConfig.schema,
              TimezoneConfig.schemaVersion,
              TimezoneConfig.migration,
            ),
          );
          deleteAll(
            openDB(
              CityConfig.path,
              CityConfig.schema,
              CityConfig.schemaVersion,
              CityConfig.migration,
            ),
          );
          const {path, schema, schemaVersion} = AppConfig;
          const db = openDB(path, schema, schemaVersion);
          console.log(db);
          deleteAll(db);
        }}>
        <Text style={{fontSize: 30, color: 'crimson'}}>Delete</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15, color: 'aqua'}}>{zoneData[0]?.text}</Text>
      <FlatList
        data={cityData}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <Text style={{fontSize: 15, color: 'aqua'}} key={item._id}>
              {item?.city}
            </Text>
          );
        }}
      />
    </View>
  );
};

const stateToProps = (state: any) => ({
  zoneDB: state.timezone.database.zone,
  zoneData: state.timezone.zone.byList,
  cityDB: state.timezone.database.city,
  cityData: state.timezone.city.byList,
});

const dispatchToProps = {
  insertOne,
  findOne,
  findAll,
  insertMany,
};
export default connect(stateToProps, dispatchToProps)(Alarm);
