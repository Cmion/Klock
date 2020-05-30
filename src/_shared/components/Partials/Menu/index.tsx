import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Menu as PopoverMenu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Color from '../../../utils/Color';
import { MenuItems } from '../../../utils/Types.d';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface MenuProps {
  menuStyles?: StyleProp<any>;
  TriggerComponent: React.ComponentType;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  menuItems: MenuItems[];
  TriggerType: 'feedback' | 'highlight' | 'opacity';
  highlightFirst?: boolean;
}
const Menu = ({
  menuStyles,
  TriggerComponent,
  style,
  menuItems,
  textStyle,
  TriggerType,
  highlightFirst,
}: MenuProps) => {
  const handleTriggerType = (type = 'opacity') => {
    if (type === 'feedback') {
      return TouchableNativeFeedback;
    }
    if (type === 'highlight') {
      return TouchableHighlight;
    }

    return TouchableOpacity;
  };
  return (
    <PopoverMenu>
      <MenuTrigger
        customStyles={{
          TriggerTouchableComponent: handleTriggerType(TriggerType),
          triggerWrapper: menuStyles,
          triggerOuterWrapper: menuStyles,
          triggerTouchable: {
            activeOpacity: 0.7,
          },
        }}>
        <TriggerComponent />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={[styles.menuOptions, style]}>
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
                  style={[
                    styles.textStyle,
                    {
                      color:
                        highlightFirst && key === 0
                          ? Color.PRIMARY
                          : Color.TEXTPRIMARY,
                    },
                    {
                      ...(textStyle || {}),
                    },
                  ]}>
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

export default Menu;
