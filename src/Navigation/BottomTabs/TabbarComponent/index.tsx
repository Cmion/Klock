import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../../_shared/utils/Color';
import { TABBARWIDTH } from '../../../_shared/utils/Constants';
import { TouchableOpacity, View } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { runTiming } from '../../../_shared/utils';
import styles from './styles';

//TODO: Make Tabbar component height responsive
//TODO: Make Tabbar indicator work correctly with back button
const TabbarComponent = (
  props: Partial<{ state: object | any; navigation: object | any }>,
) => {
  const state = props?.state;
  const routes = state?.routes;
  const navigation = props?.navigation;
  const INDICATORWIDTH = 50;
  const ICONSCOUNT = 4;

  const iconsLayout = useRef({ cur: 0, prev: 0 });
  return (
    <View style={styles.container}>
      <View style={[styles.tabContainer, { width: TABBARWIDTH }]}>
        <View style={[styles.tabList, { width: TABBARWIDTH }]}>
          {routes.map(
            (
              {
                name,
                key,
                params,
              }: { name: string; key: string; params: object | any },
              index: number,
            ) => {
              const icon = params?.icon;
              return (
                <TouchableOpacity
                  style={[
                    styles.tab,
                    {
                      width: TABBARWIDTH / ICONSCOUNT,
                    },
                  ]}
                  activeOpacity={0.7}
                  importantForAccessibility={'yes'}
                  accessibilityHint={`${name} tab-bar button`}
                  accessibilityLabel={name}
                  accessibilityRole={'tab'}
                  key={key}
                  onPress={() => {
                    navigation.navigate(name);
                    // index is zero-indexed
                    iconsLayout.current = {
                      cur: index,
                      prev: iconsLayout.current.cur,
                    };
                  }}>
                  <Icon name={icon} size={30} color={Color.PRIMARY} />
                </TouchableOpacity>
              );
            },
          )}
        </View>

        <View style={[styles.tabIndicatorContainer, { width: TABBARWIDTH }]}>
          <View style={[styles.indList, { width: TABBARWIDTH / ICONSCOUNT }]}>
            <Animated.View
              style={[
                styles.indicator,
                { width: INDICATORWIDTH, backgroundColor: Color.PRIMARY },
                {
                  transform: [
                    {
                      translateX: runTiming({
                        from:
                          (TABBARWIDTH / ICONSCOUNT) * iconsLayout.current.prev,

                        to:
                          (TABBARWIDTH / ICONSCOUNT) * iconsLayout.current.cur,

                        easing: Easing.elastic(),
                        duration: 200,
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default TabbarComponent;
