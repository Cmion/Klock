import React, {useMemo, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import Color from '../../utils/Color';
import Ticks from './Ticks';
import Hours from './Hours';
import Hands from './Hands';
import {time2Angle} from '../../utils/AnimationHelpers';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PRIMARY,
    borderWidth: 12,
    borderColor: Color.DARK,
    height: 300,
    width: 300,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ClockUIProps {
  size: Required<number>;
  borderWidth: Required<number>;
  onTimeChange?: Function;
  watchUnit?: string;
  useWatch?: boolean;
}
const ClockUI = React.memo(
  ({size, borderWidth, onTimeChange, watchUnit, useWatch}: ClockUIProps) => {
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const timer = useMemo(
      () => () => {
        setSeconds(new Date().getSeconds());
        setMinutes(new Date().getMinutes());
        setHours(new Date().getHours());
        requestAnimationFrame(timer);
      },
      [],
    );

    const {CX, CY, mapWatchUnitToTimeUnit, timeChange} = useMemo(
      () => ({
        CX: size / 2,
        CY: size / 2,
        timeChange: (e: number | object) =>
          typeof onTimeChange === 'function' ? onTimeChange(e) : null,
        mapWatchUnitToTimeUnit: (sec: number, min: number, hrs: number) =>
          [watchUnit].indexOf('seconds') !== -1
            ? sec
            : [watchUnit].indexOf('minutes') !== -1
            ? min
            : [watchUnit].indexOf('hours') !== -1
            ? hrs
            : [],
      }),
      [],
    );

    useEffect(() => {
      if (useWatch && watchUnit && watchUnit !== 'all')
        timeChange({hours, minutes, seconds});
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mapWatchUnitToTimeUnit(seconds, minutes, hours)]);

    useEffect(() => {
      timer();
      if (useWatch && watchUnit === 'all')
        timeChange({hours, minutes, seconds});
    }, [seconds, minutes, hours, timer, useWatch, watchUnit, timeChange]);

    return (
      <View
        style={[
          styles.container,
          {height: size, width: size, borderWidth, borderRadius: CY},
        ]}>
        <Ticks
          height={size - borderWidth - 90}
          width={size - borderWidth - 90}
          opacity={0.4}
          style={{
            position: 'absolute',
          }}
        />
        <Hours
          height={size - borderWidth - 30}
          width={size - borderWidth - 30}
          fontSize={15}
          style={{
            position: 'absolute',
          }}
        />
        <Hands
          // Sec
          handLength={90}
          decorPosition={60}
          decorSize={0}
          decorInnerSize={1.5}
          rotate={time2Angle(seconds, 'second')}
        />
        <Hands
          // Min
          handLength={75}
          decorPosition={40}
          decorSize={0}
          decorInnerSize={1.5}
          rotate={time2Angle(minutes, 'minute')}
        />
        <Hands
          // Hour
          handLength={55}
          decorPosition={30}
          decorSize={0}
          decorInnerSize={1.5}
          rotate={time2Angle(hours)}
        />
        <Svg height={size} width={size}>
          <Circle
            cx={CX}
            cy={CY}
            r="6"
            fill={Color.PRIMARY}
            stroke={Color.DARK}
            strokeWidth="2.5"
          />
        </Svg>
      </View>
    );
  },
);

// ClockUI.defaultProps = {
//   size: 300,
//   borderWidth: 12,
// };

export default ClockUI;
