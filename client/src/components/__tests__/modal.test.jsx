/* eslint-env jest */
import React, { useRef, useEffect } from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Popup from '../Popup';

export default () => {
  describe('Modal Component', () => {
    const sampleText = 'A div within the modal';

    it('should by default display no children', () => {
      render(
        <Popup>
          <div>{sampleText}</div>
        </Popup>,
      );
      const text = screen.queryByText(sampleText);
      expect(text).not.toBeInTheDocument();
    });

    it('should be able to open to display its children', () => {
      function App() {
        const modalRef = useRef();
        useEffect(() => {
          modalRef.current.openModal();
        }, []);
        return (
          <Popup ref={modalRef}>
            <div>{sampleText}</div>
          </Popup>
        );
      }
      render(<App />);

      const text = screen.queryByText(sampleText);
      expect(text).toBeInTheDocument();
    });

    it('should be able to close by use of the reference closer', () => {
      function App() {
        const modalRef = useRef();
        useEffect(() => {
          modalRef.current.openModal();
          modalRef.current.closeModal();
        }, []);
        return (
          <Popup ref={modalRef}>
            <div>{sampleText}</div>
          </Popup>
        );
      }
      render(<App />);

      const text = screen.queryByText(sampleText);
      expect(text).not.toBeInTheDocument();
    });

    it('should be able to close by clicking on internal exit button', () => {
      function App() {
        const modalRef = useRef();
        useEffect(() => {
          modalRef.current.openModal();
        }, []);
        return (
          <Popup ref={modalRef}>
            <div>{sampleText}</div>
          </Popup>
        );
      }
      render(<App />);

      const exit = screen.queryByTestId('exit');
      fireEvent.click(exit);

      const text = screen.queryByText(sampleText);
      expect(text).not.toBeInTheDocument();
    });
  });
};
