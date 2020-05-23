import React, { useMemo, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Color from '../../utils/Color';
import { connect } from 'react-redux';
import { debounce } from '../../utils';
import {
  CITY_FIND_ALL,
  findAll,
  getHeaderSearchValue,
  updateById,
  headerSearchClose,
} from '../../../redux/actions';
import { Collection } from '../../utils/Constants';
import { Cities } from './../../utils/Types.d';
import Timer from '../../components/Partials/Timer';
import Loader from './../Partials/Loader/index';
import EmptyListRenderer from './partials/EmptyListRenderer';
import ListItemRenderer from './partials/ListItemRenderer';
import styles from './styles';

interface TimezoneProps {
  cities: Array<Cities>;
  currentCity: Cities;
  searchValue: string;
  findAll: Function;
  searchTouched: boolean;
  getHeaderSearchValue: Function;
  updateById: Function;
  headerSearchClose: Function;
}
const Timezone = ({
  cities,
  currentCity,
  searchValue,
  // eslint-disable-next-line no-shadow
  findAll,
  searchTouched,
  // eslint-disable-next-line no-shadow
  getHeaderSearchValue,
  // eslint-disable-next-line no-shadow
  updateById,
  // eslint-disable-next-line no-shadow
  headerSearchClose,
}: TimezoneProps) => {
  const [time, setTime] = useState({});
  const [isTyping, setIsTyping] = useState(false);

  const search = useMemo(
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
          setIsTyping(false);
        },
        () => {
          setIsTyping(true);
        },
        250,
        false,
      ),
    [findAll],
  );
  useEffect(() => {
    return () => {
      getHeaderSearchValue({ value: '', touched: false });
    };
  }, [getHeaderSearchValue]);
  useEffect(() => {
    if (searchTouched) {
      search(searchValue);
    }
  }, [searchValue, search, searchTouched]);

  return (
    <>
      <Timer watchUnit={'minutes'} onTimeChange={(e: object) => setTime(e)} />
      <View style={[styles.container]}>
        <FlatList
          data={cities}
          extraData={currentCity}
          keyExtractor={(item: Cities) => item._id.toString()}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }: { item: Cities }) => (
            <ListItemRenderer
              item={item}
              time={time}
              updateById={updateById}
              getHeaderSearchValue={getHeaderSearchValue}
              headerSearchClose={headerSearchClose}
            />
          )}
          ListEmptyComponent={() => {
            return isTyping ? (
              <View style={styles.loaderContainer}>
                <Loader loading={isTyping} color={Color.TEXTPRIMARY} />
              </View>
            ) : (
              <EmptyListRenderer />
            );
          }}
        />
      </View>
    </>
  );
};

const stateToProps = (state: any) => ({
  searchValue: state?.ui?.header?.search?.value,
  searchTouched: state?.ui?.header?.search?.touched,
  cities: state?.timezone?.city.byList,
  currentCity: state?.timezone?.city?.current,
});
const dispatchToProps = {
  findAll,
  getHeaderSearchValue,
  updateById,
  headerSearchClose,
};
export default connect(stateToProps, dispatchToProps)(Timezone);
