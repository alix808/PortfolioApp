import React from 'react';
/* Styled Componets */
import { Flex, Svg } from './svg-text.styles';

const SvgText = () => {
  return (
    <Flex>
      <Svg height='100%' width='100%'>
        <text fill='blue'>I'm</text>
      </Svg>
    </Flex>
  );
};

export default SvgText;
