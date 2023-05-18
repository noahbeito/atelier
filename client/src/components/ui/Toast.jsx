import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icons from '../Icons';
import Button from './Button';

const StyledToast = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.toast};
  position: relative;

  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;

  overflow: hidden;

  border-radius: 5px;

  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;

  & .exit {
    &:hover {
      color: ${({ theme }) => theme.onSell};
    }
    top: 0;
    right: 5px;
  }

  &.open {
    max-height: 200px;
    padding: 10px 50px;
    transition: padding 1s, max-height 1s;
  }
  &.closed {
    max-height: 0;
    padding: 0 50px;
    transition: padding 1s, max-height 1s;
  }
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 100%;
  }
`;

export default function Toast({
  isOpen,
  onClick,
  missing,
  children,
  ...props
}) {
  return (
    <StyledToast data-testid="toast" className={isOpen ? 'open' : 'closed'} {...props}>
      <Button className="exit" variant="medium" onClick={onClick}><Icons.Exit title="Click to close error." size="lg" /></Button>
      <div data-testid="toast-value">{children}</div>
    </StyledToast>
  );
}

Toast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  missing: PropTypes.arrayOf(PropTypes.string),
};

Toast.defaultProps = {
  missing: [],
};
