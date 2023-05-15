import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import AddToFavButton from '../components/AddToCart/AddToFavButton';

afterEach(cleanup);
export default () => {
  describe('app', () => {
    it('This is inside Overview', () => {
      expect(true).toBe(true);
    });
    it('Should have a value of 1 after event fire', () => {
      const { getByTestId } = render(<AddToFavButton />);
      const countTextNode = getByTestId('counter');
      fireEvent.click(getByTestId('button-up'));
      expect(countTextNode.textContent).toBe('1');
    });
  });
};
