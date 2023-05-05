import React from 'react';
import PropTypes from 'prop-types';

export default function Popup({ children, ...props }) {
  return <div {...props}>{ children }</div>;
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};
