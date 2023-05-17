import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RequiredStyle = styled.span`
  color: #bb3838;
`;
const StyledInput = styled.input`
  display: block;
  font-size: 0.9rem;
  padding: 10px;
  border: none;
  border-bottom: 2px solid teal;
  background-color: #eee;
  transition: 0.3s;
  &:focus {
    outline: none;
    background-color: white;
  }
`;
const StyledContainer = styled.div`
  margin: 20px 0;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    & .warning {
      margin: 5px 0;
      background-color: #ffffc1;
      padding: 20px;
      padding-left: 40px;
      border-radius: 5px;
      border: 1px solid #bebe48;
      position: relative;
      font-size: 0.9rem;

      &::before {
        content: '!';
        font-family: verdana;
        color: #bebe48;
        font-size: 2rem;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%) rotate(10deg);
      }
    }
  }
  @media(max-width: calc(${({ theme }) => theme.bpTablet} - 1px)) {
    & .warning {
      font-size: 0.7rem;
      margin-top: 3px;
      color: gray
    }
  }
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
    label
      ? (
        <StyledContainer>
          <label htmlFor={id}>
            {label}
            {required && <RequiredStyle>*</RequiredStyle>}
            <StyledInput type="text" id={id} {...props} />
          </label>
          {!!warning && <div className="warning">{warning}</div>}
        </StyledContainer>
      ) : <StyledInput type="text" id={id} {...props} />
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
