import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RequiredStyle = styled.span`
  color: #bb3838;
`;

const StyledArea = styled.div`
  margin: 20px 0;
  & textarea {
    box-sizing: border-box;
    display: block;
    font-size: 0.7rem;
    padding: 5px;
    font-family: verdana;
    resize: none;
    height: 4rem;
    background-color: #eee;
    border: none;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border: 1px solid #eee;
    transition: 0.3s;

    &:focus {
      box-sizing: border-box;
      outline: none;
      background-color: white;
      border: 1px solid teal;
    }
  }
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
      {!!warning && <div className="warning">{warning}</div>}
    </StyledArea>
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
