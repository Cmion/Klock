import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screens from '../../Modules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Color from '../../_shared/utils/Color';
import {connect} from 'react-redux';
import {initDB} from '../../redux/actions';
import {TimezoneConfig} from '../../_shared/utils/RealmDB';

const Tab = createBottomTabNavigator();

// eslint-disable-next-line no-shadow
const BottomTabs = ({initDB}: {initDB: Function}) => {
  const schemaConfigs = [TimezoneConfig];
  useEffect(() => {
    initDB(schemaConfigs);
  }, []);
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Color.PRIMARY,
        inactiveTintColor: Color.TEXTSECONDARY,
        // keyboardHidesTabBar: true,
        style: {
          backgroundColor: Color.DARK,
          borderTopWidth: 0,
          height: 70,
          overflow: 'hidden',
        },
      }}>
      {Screens.map(({component, name, icon}, key) => {
        return (
          <Tab.Screen
            key={key}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({color, focused}) => {
                return <Icon name={icon} size={30} color={color} />;
              },
              tabBarAccessibilityLabel: name,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const dispatchToProps = {
  initDB,
};
export default connect(null, dispatchToProps)(BottomTabs);
