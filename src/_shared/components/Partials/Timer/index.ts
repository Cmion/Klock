import { useEffect, useState, useMemo, useCallback, useRef } from 'react';

const Timer = ({
  onTimeChange,
  watchUnit,
}: {
  onTimeChange: Function;
  watchUnit: string;
}) => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  let timerFrame = useRef(0);
  const timer = useCallback(() => {
    () => {
      timerFrame.current = requestAnimationFrame(timer);
      setSeconds(new Date().getSeconds());
      setMinutes(new Date().getMinutes());
      setHours(new Date().getHours());
    };
  }, []);

  const { mapWatchUnitToTimeUnit, timeChange } = useMemo(
    () => ({
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
    [onTimeChange, watchUnit],
  );

  useEffect(() => {
    if (watchUnit && watchUnit !== 'all') {
      timeChange({ hours, minutes, seconds });
    }
    return () => {
      cancelAnimationFrame(timerFrame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapWatchUnitToTimeUnit(seconds, minutes, hours)]);

  useEffect(() => {
    timer();
    if (watchUnit === 'all') {
      timeChange({ hours, minutes, seconds });
    }

    return () => {
      cancelAnimationFrame(timerFrame.current);
    };
  }, [seconds, minutes, hours, timer, watchUnit, timeChange, timerFrame]);
  return null;
};

export default Timer;
