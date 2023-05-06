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
      color: teal;
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
    display: inline flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    height: 80px;
    &:hover {
      background: #eee;
      border-color: teal;
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
          content: "+";
          position: absolute;
          font-size: 1.5em;
          line-height: 0.75em;
          top: calc(50% - 1px);
          transform: translateY(-50%);
          right: 20px;
        }
      `;
    case 'form':
      return css`
        ${reset}
        background-color: teal;
        padding: 10px 15px;
        font-size: 1.1rem;
        margin: 10px;
        color: white;
        border: 2px solid teal;
        &:hover {
          color: teal;
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
