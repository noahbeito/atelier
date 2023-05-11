import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RequiredStyle = styled.span`
  color: #bb3838;
`;

export default function Input({
  validation,
  label,
  id,
  warning,
  required,
  ...props
}) {
  return (
    <>
      {
        label
          ? (
            <label htmlFor={id}>
              {label}
              {required && <RequiredStyle>*</RequiredStyle>}
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
  required: PropTypes.bool,
};

Input.defaultProps = {
  validation: null,
  label: undefined,
  warning: undefined,
  required: false,
};
