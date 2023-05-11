import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

export default function ActionButton({
  id,
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
        onClick={() => handleRemoveItemClick(id)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      />
    );
  }
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleRemoveItemClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  handleStarClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};
