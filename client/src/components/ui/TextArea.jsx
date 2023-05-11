import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RequiredStyle = styled.span`
  color: #bb3838;
`;

export default function TextArea({
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
              <RequiredStyle>*</RequiredStyle>
              <textarea type="text" id={id} {...props} />
            </label>
          )
          : <textarea type="text" id={id} {...props} />
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
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  validation: null,
  label: undefined,
  warning: undefined,
  required: false,
};
