import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

export default function ActionButton({
  handleRemoveItemClick,
  symbol,
  handleStarClick,
  handleMouseEnter,
  handleMouseLeave,
}) {
  if (symbol === 'EmptyStar') {
    return (
      <Icons.EmptyStar
        onClick={() => handleStarClick()}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      />
    );
  }

  if (symbol === 'Exit') {
    return (
      <Icons.Exit
        onClick={() => handleRemoveItemClick()}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      />
    );
  }
}

ActionButton.propTypes = {
  handleRemoveItemClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  handleStarClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};
