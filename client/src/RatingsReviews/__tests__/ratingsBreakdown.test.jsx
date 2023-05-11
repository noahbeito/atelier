import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import ratingsReviewsReducer from '../reducers/index';
import RatingBreakdown from '../components/RatingBreakdown/RatingBreakdown';

import testdata from '../testData/reviews.json';

const testState = {
  reviews: {
    product: 0,
    page: 0,
    count: 0,
    results: [],
  },
  meta: {
    product_id: '0',
    ratings: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    recommend: {
      false: 0,
      true: 0,
    },
    characteristics: {
      Size: {
        id: 0,
        value: 2.511111,
      },
    },
  },
  rloading: true,
  mloading: true,
  error: null,
};

const action = {
  type: '',
  payload: {},
};

jest.mock('axios');

describe('RatingBreakdown component mocks', () => {
  it('should fetch qa data and dispatch it to the Redux store', async () => {
    axios.get.mockResolvedValueOnce({ data: testdata });

    expect(ratingsReviewsReducer(undefined, { type: undefined }))
      .toEqual(testState);
  });
});
