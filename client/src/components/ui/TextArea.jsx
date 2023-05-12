import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RequiredStyle = styled.span`
  color: #bb3838;
`;

const StyledArea = styled.div`
  margin: 20px 0;
  & textarea {
    display: block;
    font-size: 0.7rem;
    padding: 5px;
    font-family: verdana;
    resize: none;
    height: 4rem;
  }
`;

export default function TextArea({
  validation,
  label,
  id,
  required,
  ...props
}) {
  return (
    <StyledArea>
      {
        label
          ? (
            <label htmlFor={id}>
              {label}
              {required && <RequiredStyle>*</RequiredStyle>}
              <textarea type="text" id={id} {...props} />
            </label>
          )
          : <textarea type="text" id={id} {...props} />
      }
    </StyledArea>
  );
}

TextArea.propTypes = {
  validation: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  validation: null,
  label: undefined,
  required: false,
};
