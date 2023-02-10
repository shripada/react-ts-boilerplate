import React from 'react';
import { ReactComponent as Dollor } from '../../assets/dollor.svg';
import { IProps } from './types';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import styled from 'styled-components/macro';

const InputTextField = (props: IProps) => {
  return (
    <Wrapper>
      <Dollor />
    </Wrapper>
  );
};

/* Change this as per your component requirement */

const Wrapper = styled.div`
  color: ${COLORS.gray};
  font-weight: ${WEIGHTS.medium};
  padding: 10px;
  & svg > path {
    fill: blue;
  }
  @media ${QUERIES.lapTopAndBelow} {
    color: ${COLORS.white};
    padding: 8px;
  }
`;

export default InputTextField;
