/* eslint-disable prettier/prettier */
import Animated, {
  multiply,
  divide,
  add,
  cond,
  sub,
  lessThan,
  Value,
  abs,
  greaterOrEq,
  eq,
  and,
  lessOrEq,
  modulo,
  concat,
} from 'react-native-reanimated';

const π: number = Math.PI;

export const atan2 = (
  y: Animated.Adaptable<number>,
  x: Animated.Adaptable<number>,
) => {
  const coeff1: number = Math.PI / 4;
  const coeff2: number = 3 * coeff1;
  const absY: Animated.Node<number> = abs(y);
  const angle: Animated.Node<number> = cond(
    greaterOrEq(x, 0),
    [sub(coeff1, multiply(coeff1, divide(sub(x, absY), add(x, absY))))],
    [sub(coeff2, multiply(coeff1, divide(add(x, absY), sub(absY, x))))],
  );
  return cond(lessThan(y, 0), multiply(angle, -1), cond(eq(y, 0), 0, angle));
};

type Vector = {
  x: Animated.Adaptable<number>;
  y: Animated.Adaptable<number>;
};
export const vector = () => {
  const create = (x: number, y: number) => {
    const valueX = x ? new Value(x) : new Value(0);
    const valueY = y ? new Value(y) : valueX;
    return {x: valueX, y: valueY};
  };

  const dot = (vector1: Vector, vector2: Vector) => {
    const v1 = {x: new Value(0), y: new Value(0), ...(vector1 ? vector1 : {})};
    const v2 = {x: new Value(0), y: new Value(0), ...(vector2 ? vector2 : {})};
    return add(multiply(v1.x, v2.x), multiply(v1.y, v2.y));
  };
  return {
    create,
    dot,
  };
};

interface Trigonometry {
  toRad: Function;
  toDeg: Function;
  polarToCartesian: Function;
  π: number;
}
export const Trig: Trigonometry = (function () {
  /**
   * Converts degrees to radians
   */
  const toRad = (deg: number) => (deg * π) / 180;
  /**
   * Converts radians to degrees
   */
  const toDeg = (rad: number) => (rad * 180) / π;

  /**
   * Converts the polar coordinate to a cartesian coordinate
   */
  const polarToCartesian = (rad: number, α: number, point: string = 'x') => {
    const pointName = typeof point === 'string' ? point.toLowerCase() : 'all';
    if (pointName === 'y') {
      return rad * Math.sin(α);
    }
    if (pointName === 'x') {
      return rad * Math.cos(α);
    }
    return {x: rad * Math.cos(α), y: rad * Math.sin(α)};
  };
  return {
    toDeg,
    toRad,
    π,
    polarToCartesian,
  };
})();

export const AnimatedTrig = (function () {
  /**
   * Converts degrees to radians
   */
  const toRad = (deg: Animated.Adaptable<number>) =>
    divide(multiply(deg, π), 180);
  /**
   * Converts radians to degrees
   */
  const toDeg = (rad: Animated.Adaptable<number>) =>
    divide(multiply(rad, 180), π);
  return {
    toDeg,
    toRad,
  };
})();

/**
 * Checks if  value is in given range
 */
export const between = (
  α: Animated.Value<number>,
  start: number,
  end: number,
) => and(greaterOrEq(α, start), lessOrEq(α, end));

/**
 * Returns the absolute value of an angle.
 * It also returns the corresponding positive angle for a negative angle.
 */
export const absAngle = (α: Animated.Value<number>) => {
  return cond(between(α, -π, 0), add(α, π * 2), α);
};

/**
 * Offsets and angle by given rotation value.
 */
export const rotateAngle = (angle: Animated.Value<number>, rotation: number) =>
  add(angle, rotation);

/**
   * Turns an angle into a time

   Applied formula :

  let k = timeUnit / 60

  angle = θ * k

  timeUnit / 60 = angle / 360

  timeUnit = angle / 360 * 60

   */
export const angle2Time = (
  α: Animated.Value<number>,
  unitOffset: number = 60,
  rotationAngle: number = 0,
) =>
  // Clamp degree to 360 if it exceeds
  multiply(
    divide(
      modulo(
        add(AnimatedTrig.toDeg(α), rotationAngle),
        AnimatedTrig.toDeg(π * 2),
      ),
      AnimatedTrig.toDeg(π * 2),
    ),
    unitOffset,
  );

/**
 * Turns the current position of the hand of a clock to an angle
 */
export const time2Angle = (
  time: Animated.Adaptable<number>,
  unit: string = 'hour',
) => {
  if (unit === 'minute' || unit === 'second') {
    return concat(AnimatedTrig.toRad(divide(multiply(360, time), 60)), 'rad');
  }
  return concat(
    AnimatedTrig.toRad(divide(multiply(360, multiply(time, 5)), 60)),
    'rad',
  );
};
/**
 * Flips an angle horizontally.
 * returns zero when flipping the origin of the angle, usually zero.
 */
export const flipHorizontal = (α: Animated.Value<number>) =>
  cond(
    eq(α, 0),
    α,
    cond(
      lessThan(α, 0),
      cond(between(α, -π, 0), sub(-π, α), sub(sub(-π, α), -π * 2)),
      cond(between(α, 0, π), sub(π, α), add(sub(π, α), π * 2)),
    ),
  );

export const flipVertical = (α: Animated.Value<number>) =>
  cond(eq(α, 0), α, cond(lessThan(α, 0), sub(-π * 2, α), sub(π * 2, α)));
