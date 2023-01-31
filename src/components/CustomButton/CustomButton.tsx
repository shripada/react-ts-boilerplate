import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../../constants';
import { IProps } from './types';

const CustomButton = (props: IProps) => {
  return <Wrapper>TODO</Wrapper>;
};

const Wrapper = styled.button`
  padding: 10px 10px;
  border-radius: 3px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  /* media queries using QUERIES*/
  @media (${QUERIES.lapTopAndBelow}) {
    padding: 3px 8px;
  }
`;

export default CustomButton;
