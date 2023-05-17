/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store/index';
import RatingsReviews from '../index';

import testdata from '../testData/reviews.json';
import { fetchReviews } from '../actions/index';

jest.mock('axios');

export default () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('ReviewList component testing', () => {
    it('should render overall rating', async () => {
      axios.mockResolvedValue({ data: testdata });
      store.dispatch(fetchReviews('00000'));

      await waitFor(() => {
        expect(axios).toHaveBeenCalledTimes(1);
        console.log(store.getState().ratingsReviews);
        render(
          <Provider store={store}>
            <RatingsReviews />
          </Provider>,
        );
      });

      [
        3.5,
        '1 stars', '2 stars', '3 stars', '4 stars',
        '5 stars', 'Fit', 'Length', 'Comfort', 'Quality',
      ].forEach((element) => {
        expect(screen.getByText(element)).toBeInTheDocument();
      });
    });
  });
};
