import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

const StyledButton = styled.button`
  position: absolute;
  left: 5px
  height: 100%;
  z-index: 10;
`;

export default function ChevronLeft({ clickHandler, carouselId }) {
  return (
    <StyledButton type="button" onClick={() => clickHandler(carouselId, 'left')}>
      <Icons.ChevronLeft />
    </StyledButton>
  );
}

ChevronLeft.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  carouselId: PropTypes.string.isRequired,
};
