import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ children, ...props }) {
  return <form {...props}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
