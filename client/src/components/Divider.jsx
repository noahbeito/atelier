import React from 'react';
import PropTypes from 'prop-types';

export default function Divider({ children }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          {index !== children.length - 1 && ' | '}
        </>
      ))}
    </>
  );
}

Divider.propTypes = {
  children: PropTypes.node.isRequired,
};
