import React from 'react';
import { View, TouchableOpacity, Text, StyleProp } from 'react-native';
import {
  Menu as PopoverMenu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Color from '../../../utils/Color';
import Font from '../../../utils/Font';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface MenuItems {
  icon: string;
  action: Function;
  title: string;
}
interface MenuProps {
  menuStyles?: StyleProp<any>;
  TriggerComponent: React.ComponentType;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  menuItems: MenuItems[];
}
const Menu = ({
  menuStyles,
  TriggerComponent,
  style,
  menuItems,
  textStyle,
}: MenuProps) => {
  return (
    <PopoverMenu>
      <MenuTrigger
        customStyles={{
          TriggerTouchableComponent: TouchableOpacity,
          triggerWrapper: menuStyles,
          triggerOuterWrapper: menuStyles,
          triggerTouchable: {
            activeOpacity: 0.7,
          },
        }}>
        <TriggerComponent />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={style}>
        {menuItems.map(({ icon, title, action }: MenuItems, key) => {
          return (
            <MenuOption onSelect={() => action()} key={key}>
              <View style={styles.iconContainer}>
                {icon && (
                  <Icon
                    name={icon}
                    size={24}
                    color={Color.TEXTSECONDARY90}
                    style={styles.icon}
                  />
                )}
                <Text
                  style={{
                    ...(textStyle || {}),
                  }}>
                  {title}
                </Text>
              </View>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </PopoverMenu>
  );
};

Menu.defaultProps = {
  style: {
    backgroundColor: Color.SECONDARY,
    borderRadius: 5,
    borderWidth: 0,
  },
  menuStyles: {},
  textStyle: {
    color: Color.TEXTPRIMARY,
    fontFamily: Font.MEDIUM,
  },
};
export default Menu;
