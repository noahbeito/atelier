import React from 'react';
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch } from 'react-redux';

import QuestionsAnswers from '../components/QuestionsAnswers';

jest.mock('axios');

// Create mock stack to define a mock selector method
const mockId = '1234';

const mockData = {
  product_id: mockId,
  results: [
    {
      question_id: 5678,
      question_body: 'Where is this product made?',
      question_date: '2018-02-28T00:00:00.000Z',
      asker_name: 'funnygirl',
      question_helpfulness: 18,
      reported: false,
      answers: {
        345: {
          id: 1,
          body: 'idk',
          date: '2023-03-23T00:00:00.000Z',
          answerer_name: 'professor',
          helpfulness: 5,
          photos: [],
        },
      },
    },
  ],
};

const mockState = {
  product: {
    isLoading: false,
    data: {
      id: mockId,
    },
    error: null,
  },
  questionsAnswers: {
    main: {
      loading: false,
      questions: mockData,
    },
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockImplementation((selector) => selector(mockState)),
}));

const mockStore = configureStore([]);

export default () => {
  describe('QA component mocks', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should fetch qa data and dispatch it to the Redux store', async () => {
      const dispatchMock = jest.fn();
      axios.get.mockResolvedValueOnce({ data: mockData });
      useDispatch.mockReturnValue(dispatchMock);

      const store = mockStore();

      const { getByText, getByTestId } = render(
        <Provider store={store}>
          <QuestionsAnswers />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalledWith('/qa/questions/', { params: { product_id: mockId } }));

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: '@questions/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/SET_DATA', payload: mockData });

      // Tests that various parts of the data were displayed within the DOM

      expect(getByText('Where is this product made?')).toBeInTheDocument();
      console.log(getByTestId('answer-bar').textContent);
      expect(getByTestId('answer-bar').textContent.includes('by professor, March 22, 2023')).toBe(true);
    });

    it('should fail and dispatch error when axios fails', async () => {
      const mockError = 'Failed!';

      const dispatchMock = jest.fn();
      axios.get.mockRejectedValueOnce({ message: mockError });
      useDispatch.mockReturnValue(dispatchMock);

      const store = mockStore();

      render(
        <Provider store={store}>
          <QuestionsAnswers />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalledWith('/qa/questions/', { params: { product_id: mockId } }));

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: '@questions/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_FAILED', payload: mockError });
    });
  });
};
