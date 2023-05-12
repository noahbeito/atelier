import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

const StyledButton = styled.button`
  position: absolute;
  right: 5px;
  height: 100%;
  z-index: 10;
`;

export default function ChevronRight({ clickHandler }) {
  return (
    <StyledButton type="button" onClick={() => clickHandler()}>
      <Icons.ChevronRight />
    </StyledButton>
  );
}

ChevronRight.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
