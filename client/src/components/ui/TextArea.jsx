import React from 'react';
import PropTypes from 'prop-types';

export default function TextArea({
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
              <textarea type="text" id={id} {...props} />
            </label>
          )
          : <input type="text" id={id} {...props} />
      }
      <div>{warning}</div>
    </>
  );
}

TextArea.propTypes = {
  validation: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  warning: PropTypes.string,
};

TextArea.defaultProps = {
  validation: null,
  label: undefined,
  warning: undefined,
};
