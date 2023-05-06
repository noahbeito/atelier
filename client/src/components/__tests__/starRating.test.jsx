/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StarRating from '../StarRating';

export default () => {
  describe('Star Rating Component', () => {
    it('Star Rating Component should have 5 divs', () => {
      render(<StarRating rating={3.3} />);

      for (let i = 0; i < 5; i += 1) {
        const star = document.getElementById(i);
        expect(star).toBeInTheDocument();
      }
    });
  });
};
