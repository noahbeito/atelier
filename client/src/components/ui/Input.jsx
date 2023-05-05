import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  validation,
  label,
  id,
  warning,
  ...props
}) {
  return (
    <>
      {
        label
          ? (
            <label htmlFor={id}>
              {label}
              <input type="text" id={id} {...props} />
            </label>
          )
          : <input type="text" id={id} {...props} />
      }
      <div>{warning}</div>
    </>
  );
}

Input.propTypes = {
  validation: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  warning: PropTypes.string,
};

Input.defaultProps = {
  validation: null,
  label: undefined,
  warning: undefined,
};
