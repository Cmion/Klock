import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles';
import { CITY_FIND_BY_ID } from './../../../../../redux/actions/timezone/city';
import { Collection } from '../../../../utils/Constants';
import { Cities } from './../../../../utils/Types.d';
import Checkbox from './../../../Partials/Checkbox/index';
import { parseDST } from './../../../../utils/Helpers/index';

const { width } = Dimensions.get('window');

const ListItemRenderer = ({
  item,
  time,
  updateById,
  getHeaderSearchValue,
  headerSearchClose,
}: {
  item: Cities;
  time: any;
  updateById: Function;
  getHeaderSearchValue: Function;
  headerSearchClose: Function;
}) => {
  const { navigate } = useNavigation();
  const selectCity = () => {
    updateById({
      db: Collection.CITY,
      id: item._id,
      data: { isSelected: !item.isSelected },
      onSuccess: CITY_FIND_BY_ID,
    });

    getHeaderSearchValue({ value: '', touched: false });
    headerSearchClose(true);
    navigate('Clock');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      accessibilityRole={'button'}
      accessibilityLabel={'World Clock City Button'}
      onPress={selectCity}
      style={[styles.renderContainer, { width: width - 60 }]}>
      <View style={styles.renderMainContainer}>
        <Text style={styles.cityText}>{item.city}</Text>
      </View>
      <View style={[styles.timeContainer, { width: (width - 60) * 0.3 }]}>
        <View style={styles.check}>
          {item.isSelected ? (
            <Checkbox size={27} checked={item.isSelected} useBordered />
          ) : null}
        </View>
        <View>
          <Text style={styles.timeText}>
            {parseDST({
              dst: item.dst,
              utcOffset: item.utcOffset,
              setter: moment({ ...time }),
            }).format('LT')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemRenderer;
