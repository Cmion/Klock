import React from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import Color from '../../../../utils/Color';

interface TicksProps {
  height: number;
  width: number;
  opacity: number;
  style?: object;
}
export default ({ height, width, opacity, style }: TicksProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${183} ${183}`}
      style={{ ...(style || {}) }}>
      <G id="ticks" transform="translate(-97 -189)" opacity={opacity || 0.5}>
        <G id="ticks-2" data-name="ticks">
          <G id="dots" transform="translate(187 189)">
            <Circle
              id="Ellipse_46"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill={Color.DARK}
            />
          </G>
          <G id="dots-2" data-name="dots" transform="translate(187 369)">
            <Circle
              id="Ellipse_46-2"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-3"
          data-name="ticks"
          transform="translate(280 279) rotate(90)">
          <G id="dots-3" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-3"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-4" data-name="dots">
            <Circle
              id="Ellipse_46-4"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-4"
          data-name="ticks"
          transform="translate(232.951 200.509) rotate(30)">
          <G id="dots-5" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-5"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-6" data-name="dots">
            <Circle
              id="Ellipse_46-6"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-5"
          data-name="ticks"
          transform="translate(266.991 233.451) rotate(60)">
          <G id="dots-7" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-7"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-8" data-name="dots">
            <Circle
              id="Ellipse_46-8"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-6"
          data-name="ticks"
          transform="translate(268.491 324.951) rotate(120)">
          <G id="dots-9" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-9"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-10" data-name="dots">
            <Circle
              id="Ellipse_46-10"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-7"
          data-name="ticks"
          transform="translate(235.549 358.991) rotate(150)">
          <G id="dots-11" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-11"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-12" data-name="dots">
            <Circle
              id="Ellipse_46-12"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-8"
          data-name="ticks"
          transform="translate(235.549 358.991) rotate(150)">
          <G id="dots-13" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-13"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-14" data-name="dots">
            <Circle
              id="Ellipse_46-14"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G
          id="ticks-9"
          data-name="ticks"
          transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
          <G id="dots-15" data-name="dots" transform="translate(0 180)">
            <Circle
              id="Ellipse_46-15"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
          <G id="dots-16" data-name="dots">
            <Circle
              id="Ellipse_46-16"
              data-name="Ellipse 46"
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#131a22"
            />
          </G>
        </G>
        <G id="_1-4" data-name="1-4">
          <G
            id="ticks-10"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-17" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-17"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-18" data-name="dots">
              <Circle
                id="Ellipse_46-18"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-11"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-19" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-19"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-20" data-name="dots">
              <Circle
                id="Ellipse_46-20"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-12"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-21" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-21"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-22" data-name="dots">
              <Circle
                id="Ellipse_46-22"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-13"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-23" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-23"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-24" data-name="dots">
              <Circle
                id="Ellipse_46-24"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
        <G
          id="_1-4-2"
          data-name="1-4"
          transform="translate(-114.996 131.83) rotate(-30)">
          <G
            id="ticks-14"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-25" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-25"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-26" data-name="dots">
              <Circle
                id="Ellipse_46-26"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-15"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-27" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-27"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-28" data-name="dots">
              <Circle
                id="Ellipse_46-28"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-16"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-29" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-29"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-30" data-name="dots">
              <Circle
                id="Ellipse_46-30"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-17"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-31" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-31"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-32" data-name="dots">
              <Circle
                id="Ellipse_46-32"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
        <G
          id="_1-4-3"
          data-name="1-4"
          transform="translate(-148.67 303.496) rotate(-60)">
          <G
            id="ticks-18"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-33" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-33"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-34" data-name="dots">
              <Circle
                id="Ellipse_46-34"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-19"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-35" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-35"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-36" data-name="dots">
              <Circle
                id="Ellipse_46-36"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-20"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-37" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-37"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-38" data-name="dots">
              <Circle
                id="Ellipse_46-38"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-21"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-39" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-39"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-40" data-name="dots">
              <Circle
                id="Ellipse_46-40"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
        <G
          id="_1-4-4"
          data-name="1-4"
          transform="translate(-92 469) rotate(-90)">
          <G
            id="ticks-22"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-41" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-41"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-42" data-name="dots">
              <Circle
                id="Ellipse_46-42"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-23"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-43" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-43"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-44" data-name="dots">
              <Circle
                id="Ellipse_46-44"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-24"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-45" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-45"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-46" data-name="dots">
              <Circle
                id="Ellipse_46-46"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-25"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-47" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-47"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-48" data-name="dots">
              <Circle
                id="Ellipse_46-48"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
        <G
          id="_1-4-5"
          data-name="1-4"
          transform="translate(39.83 583.996) rotate(-120)">
          <G
            id="ticks-26"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-49" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-49"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-50" data-name="dots">
              <Circle
                id="Ellipse_46-50"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-27"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-51" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-51"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-52" data-name="dots">
              <Circle
                id="Ellipse_46-52"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-28"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-53" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-53"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-54" data-name="dots">
              <Circle
                id="Ellipse_46-54"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-29"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-55" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-55"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-56" data-name="dots">
              <Circle
                id="Ellipse_46-56"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
        <G
          id="_1-4-6"
          data-name="1-4"
          transform="translate(211.496 617.67) rotate(-150)">
          <G
            id="ticks-30"
            data-name="ticks"
            transform="matrix(0.995, 0.105, -0.105, 0.995, 196.573, 189.344)">
            <G id="dots-57" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-57"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-58" data-name="dots">
              <Circle
                id="Ellipse_46-58"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-31"
            data-name="ticks"
            transform="matrix(0.978, 0.208, -0.208, 0.978, 206.057, 190.688)">
            <G id="dots-59" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-59"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-60" data-name="dots">
              <Circle
                id="Ellipse_46-60"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-32"
            data-name="ticks"
            transform="translate(215.348 193.015) rotate(18)">
            <G id="dots-61" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-61"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-62" data-name="dots">
              <Circle
                id="Ellipse_46-62"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
          <G
            id="ticks-33"
            data-name="ticks"
            transform="translate(224.346 196.3) rotate(24)">
            <G id="dots-63" data-name="dots" transform="translate(0 180)">
              <Circle
                id="Ellipse_46-63"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
            <G id="dots-64" data-name="dots">
              <Circle
                id="Ellipse_46-64"
                data-name="Ellipse 46"
                cx="1.5"
                cy="1.5"
                r="1.5"
                fill="#131a22"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};
