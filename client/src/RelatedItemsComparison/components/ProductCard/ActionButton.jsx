import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons';

export default function ActionButton({ action, symbol }) {
  if (symbol === 'EmptyStar') {
    return <Icons.EmptyStar onClick={() => action()} />;
  }

  if (symbol === 'Exit') {
    return <Icons.Exit onClick={() => action()} />;
  }
}

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};
