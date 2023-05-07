/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from '../ui/Button';

export default () => {
  describe('Button UI Component', () => {
    it('extends the button element and executes onClick function', () => {
      const onClickMock = jest.fn();
      const { getByRole } = render(
        <Button onClick={onClickMock}>Click me!</Button>,
      );
      const buttonElement = getByRole('button');

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.tagName).toBe('BUTTON');
      expect(buttonElement.textContent).toBe('Click me!')

      // Simulate a click on the button and verify that onClick function is executed
      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalled();
    });
  });
};
