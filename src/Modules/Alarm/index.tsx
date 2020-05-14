/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../_shared/utils/Color';
import Font from '../../_shared/utils/Font';
import {
  useDB,
  findById,
  findAll,
  deleteAll,
  deleteOne,
  insetOne,
  getAll,
  findOne,
  updateOne,
  updateById,
  updateMany,
  sort,
  prettify,
  deleteMany,
  deleteById,
} from '../../_shared/utils/RealmDB';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import uuid from 'uuid/v1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 30,
    color: Color.PRIMARY,
    fontFamily: Font.NORMAL,
  },
});
const Alarm = () => {
  const schema = {
    name: 'Test2',
    properties: {
      id: 'int',
      name: 'string',
      age: 'int',
    },
  };
  const [data, setData] = useState(null);
  const [database, setDB] = useState(useDB('Klock.realm', schema, 0));

  // useEffect(() => console.log(data), [data]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alarm View</Text>
      <TouchableOpacity
        onPress={() => {
          insetOne(database, {
            id: Math.floor(Math.random() * 10 + 1),
            name: Math.floor(Math.random() * 10000) + ' test',
            age: Math.round(Math.random() * 340),
          });
        }}>
        <Text style={{fontSize: 30, color: 'orange'}}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //  console.log( getAll(database));
          // console.log(findOne(database, 'id < 4'));
          console.log(
            prettify(sort(findAll(database, 'id < 100'), 'id', false)),
          );
          // console.log(findById(database, 2));
        }}>
        <Text style={{fontSize: 30, color: 'orange'}}>Find</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // updateOne(database, 'id = 10', {name: 'John Doe', age: 13});
          updateById(database, 11, {
            name: 'Sonia Crimson',
            age: 22,
            occupation: 'Teacher',
          });
        }}>
        <Text style={{fontSize: 30, color: 'crimson'}}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // updateOne(database, 'id = 10', {name: 'John Doe', age: 13});
          // deleteOne(database, 'id = 5');
          // deleteAll(database);
          // deleteMany(database, 'age < 300');
          deleteById(database, 1);
        }}>
        <Text style={{fontSize: 30, color: 'crimson'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Alarm;
