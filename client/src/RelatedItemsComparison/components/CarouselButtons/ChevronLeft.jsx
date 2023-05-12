import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';
import { StyledLeftButton, StyledLeftOutfitButton } from '../../styles';

export default function ChevronLeft({ clickHandler, carouselId }) {
  if (carouselId === 'outfit-carousel') {
    return (
      <StyledLeftOutfitButton type="button" onClick={() => clickHandler()}>
        <Icons.ChevronLeft />
      </StyledLeftOutfitButton>
    );
  }
  return (
    <StyledLeftButton type="button" onClick={() => clickHandler()}>
      <Icons.ChevronLeft />
    </StyledLeftButton>
  );
}

ChevronLeft.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  carouselId: PropTypes.func.isRequired,
};
