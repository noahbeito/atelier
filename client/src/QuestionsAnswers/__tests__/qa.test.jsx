import React from 'react';
import axios from 'axios';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import QuestionsAnswers from '../components/QuestionsAnswers';

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');
jest.mock('axios');

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
    search: {
      text: '',
    },
  },
};

const mockDataWithManyQuestions = {
  product_id: '3456',
  results: [
    {
      question_id: 200,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 201,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 202,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 203,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 204,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 205,
      question_body: '?',
      answers: {},
    },
    {
      question_id: 206,
      question_body: '?',
      answers: {},
    },
  ],
};

const mockStateWithManyQuestions = { ...mockState };
mockState.questionsAnswers.main.questions = mockDataWithManyQuestions.results;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store;
let dispatchMock;

export default () => {
  beforeEach(() => {
    dispatchMock = jest.fn((actionOrThunk) => {
      if (typeof actionOrThunk === 'function') {
        return actionOrThunk(dispatchMock);
      }
      return null;
    });
    useDispatch.mockReturnValue(dispatchMock);
  });

  it('should fetch qa data and dispatch it to the Redux store', async () => {
    useSelector.mockImplementation((selector) => selector(mockState));
    store = mockStore();

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/SET_DATA', payload: mockData.results });
  });

  it('should fail and dispatch error when axios fails', async () => {
    useSelector.mockImplementation((selector) => selector(mockState));
    store = mockStore();

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

  it('should initialize with only four questions add more', async () => {
    useSelector.mockImplementation((selector) => selector(mockStateWithManyQuestions));
    store = mockStore();

    axios.get.mockResolvedValueOnce({ data: mockDataWithManyQuestions });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    const moreQuestions = screen.getByText('More Answered Questions');

    let questions = screen.getAllByTestId('question');
    expect(questions).toHaveLength(4);

    // Ensure the button sent a dispatch through. Added the clears to eliminate
    // disturbance from the `useEffect` calls
    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    dispatchMock.mockClear();
    axios.get.mockClear();
    axios.get.mockResolvedValueOnce({ data: mockDataWithManyQuestions });

    fireEvent.click(moreQuestions);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/ADD_QUESTIONS', payload: mockDataWithManyQuestions.results });

    questions = screen.getAllByTestId('question');

    expect(questions).toHaveLength(6);

    // Do another round of tests for the next click
    dispatchMock.mockClear();
    axios.get.mockClear();
    axios.get.mockResolvedValueOnce({ data: mockDataWithManyQuestions });

    fireEvent.click(moreQuestions);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    questions = screen.getAllByTestId('question');

    expect(questions).toHaveLength(7);
  });
};
