import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icons from './Icons';
import Button from './ui/Button';

const StyledPopup = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.5s;

  &:has(> .open) {
    background-color: rgba(152, 205, 222, 0.5);
  }

  & .container {
    margin: 0;
    padding: 50px 0;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 5px black;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    transform: translate(-50%, -150%) scale(0.2);
    top: 50%;
    left: 50%;
    transition: 0.5s;

    &.open {
      transform: translate(-50%, -50%) scale(1);
    }

    & .exit {
      margin: 0;
      position: absolute;
      top: 1rem;
      right: 1rem;
      &:hover {
        transform: scale(1.1);
      }
    }

    & .wrapper {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const Modal = forwardRef(({ titles, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    },
    closeModal() {
      setIsOpen(false);
    },
  }));

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    if (isOpen) {
      const timerId = setTimeout(() => {
        const container = document.querySelector('.container');
        if (container) {
          container.classList.add('open');
        }
      }, 0);
      return () => {
        document.body.style.overflow = 'auto';
        clearTimeout(timerId);
      };
    }
    const container = document.querySelector('.container');
    if (container) {
      container.classList.remove('open');
    }

    // On un-mount automatically place it back to auto, irrelevant of state:
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleExit = () => setIsOpen(false);
  return (
    isOpen ? (
      <StyledPopup {...props}>
        <div className="container">
          <Button className="exit" data-testid="exit" variant="medium" onClick={handleExit}><Icons.Exit size="2x" /></Button>
          <div className="wrapper">
            <h1>{titles[0] || ''}</h1>
            <h2>{titles[1] || ''}</h2>
            <h2>{titles[2] || ''}</h2>
            {children}
          </div>
        </div>
      </StyledPopup>
    )
      : ''
  );
});

Modal.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
