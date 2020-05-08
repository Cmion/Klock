import React from 'react';
import Svg, {G, Text, TSpan} from 'react-native-svg';
import Color from '../../../utils/Color';

interface HoursProps {
  height: number;
  width: number;
  style?: object;
  fontSize: number;
}
export default ({height, width, style, fontSize}: HoursProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${233} ${233}`}
      style={{...(style || {})}}>
      <G transform="translate(-72 -164)">
        <G transform="translate(1)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              12
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              6
            </TSpan>
          </Text>
        </G>
        <G transform="translate(166.37 -56.17) rotate(30)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              1
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              7
            </TSpan>
          </Text>
        </G>
        <G id="hours-3" transform="translate(337.304 -21.764) rotate(60)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              2
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              8
            </TSpan>
          </Text>
        </G>
        <G transform="translate(523.804 258.736) rotate(120)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              4
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              10
            </TSpan>
          </Text>
        </G>
        <G transform="translate(469 93) rotate(90)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              3
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              9
            </TSpan>
          </Text>
        </G>
        <G transform="translate(490.264 429.17) rotate(150)">
          <Text
            transform="translate(181 178)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              5
            </TSpan>
          </Text>
          <Text
            transform="translate(183 393)"
            fill={Color.DARK}
            fontSize={fontSize}
            fontFamily="MontserratAlternates-SemiBold, Montserrat Alternates"
            fontWeight="600">
            <TSpan x="0" y="0">
              11
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  );
};
