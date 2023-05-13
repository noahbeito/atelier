/* eslint-env jest */
import React from 'react';
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch } from 'react-redux';
import App from '../App';

jest.mock('axios');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockData = {
  id: 40354,
  campus: 'hr-rfp',
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description:
    'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '49.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
};

jest.mock('../Overview');
jest.mock('../RatingsReviews');
jest.mock('../QuestionsAnswers');
jest.mock('../RelatedItemsComparison');

const mockStore = configureStore([]);

export default () => {
  describe('App component mocks', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should fetch product data and dispatch it to the Redux store', async () => {
      const dispatchMock = jest.fn();

      axios.get.mockResolvedValueOnce({ data: mockData });
      useDispatch.mockReturnValue(dispatchMock);

      const store = mockStore({});

      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalled());

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: '@product/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@product/SET_DATA', payload: mockData });
    });

    it('should fail with error and dispatch it to the Redux store if one occurs', async () => {
      const mockError = 'Something failed!';

      const dispatchMock = jest.fn();

      axios.get.mockRejectedValueOnce({ message: mockError });
      useDispatch.mockReturnValue(dispatchMock);

      const store = mockStore({});

      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalled());

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: '@product/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@product/FETCH_FAILED', payload: mockError });
    });
  });
};
