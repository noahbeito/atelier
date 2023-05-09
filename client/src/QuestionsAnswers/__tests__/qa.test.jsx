import React from 'react';
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import QuestionsAnswers from '../components/QuestionsAnswers';

// Mock errors
const mockError = 'Failed!';

// Mock data
const mockId = '1234';

const mockData = {
  product_id: mockId,
  results: [
    {
      question_id: 100,
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
    loading: false,
    data: {
      id: mockId,
    },
    error: null,
  },
  questionsAnswers: {
    main: {
      loading: false,
      questions: mockData.results,
    },
  },
};

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

useSelector.mockImplementation((selector) => selector(mockState));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

jest.mock('../components/AnswersList');
const dispatchMock = jest.fn((actionOrThunk) => {
  if (typeof actionOrThunk === 'function') {
    return actionOrThunk(dispatchMock);
  }
  return null;
});
useDispatch.mockReturnValue(dispatchMock);

jest.mock('axios');

export default () => {
  describe('QA component mocks', () => {
    it('should fetch qa data and dispatch it to the Redux store', async () => {
      axios.get.mockResolvedValueOnce({ data: mockData });

      const { getByText } = render(
        <Provider store={store}>
          <QuestionsAnswers />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalled());

      expect(dispatchMock).toHaveBeenCalledTimes(3);
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/SET_DATA', payload: mockData.results });

      // Test that the question has entered the DOM
      expect(getByText('Where is this product made?')).toBeInTheDocument();
    });

    it('should fail and dispatch error when axios fails', async () => {
      axios.get.mockRejectedValueOnce({ error: mockError });

      render(
        <Provider store={store}>
          <QuestionsAnswers />
        </Provider>,
      );

      await waitFor(() => expect(axios.get).toHaveBeenCalled());

      expect(dispatchMock).toHaveBeenCalledTimes(3);
      expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
      expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/FETCH_FAILED', payload: mockError.message });
    });
  });
};
