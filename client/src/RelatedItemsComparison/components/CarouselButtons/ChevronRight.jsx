import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';
import { StyledRightButton } from '../../styles';

export default function ChevronRight({ clickHandler }) {
  return (
    <StyledRightButton type="button" onClick={() => clickHandler()}>
      <Icons.ChevronRight />
    </StyledRightButton>
  );
}

ChevronRight.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
