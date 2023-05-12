import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const buttonBuilder = ({ variant, width }) => {
  const reset = css`
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    font-family: sans-serif;
    color: #333;
    transition: 0.2s;
    width: ${width || 'auto'};
    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  `;
  const large = css`
    ${reset}
    padding: 0 20px;
    font-size: 1.1rem;
    border: 2px solid black;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: 0.2s;
    height: 80px;
    &:hover {
      background: #eee;
      border-color: ${(props) => props.theme.secondaryColor};
    }
  `;
  switch (variant) {
    case 'small':
      return css`
        ${reset}
        font-size: 0.9rem;
        margin: 0 5px;
        text-decoration: underline;
      `;
    case 'medium':
      return css`
        ${reset}
        font-size: 0.9rem;
        display: block;
        text-transform: uppercase;
        margin: 10px 0;
        font-weight: bold;
        margin-top: 20px;
      `;
    case 'large-add':
      return css`
        ${large}
        position: relative;
        padding-right: 50px;
        &:after {
          content: "\u002b";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          position: absolute;
          font-size: 1.3em;
          line-height: 0.75em;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
        }
      `;
    case 'form':
      return css`
        ${reset}
        background-color: ${(props) => props.theme.secondaryColor};
        padding: 10px 15px;
        font-size: 1.1rem;
        color: white;
        border: 2px solid ${(props) => props.theme.secondaryColor};
        &:hover {
          color: ${(props) => props.theme.secondaryColor};
          background-color: white;
        }
      `;
    case 'large-base':
    default:
      return large;
  }
};

const StyledButton = styled.button((props) => buttonBuilder(props));

export default function Button({
  variant,
  width,
  children,
  ...props
}) {
  return (
    <StyledButton
      type="button"
      variant={variant}
      {...props}
    >
      { children }
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'small',
    'medium',
    'large-add',
    'form',
    'large-base',
  ]),
  width: PropTypes.string,
};

Button.defaultProps = {
  variant: 'large-base',
  width: undefined,
};
