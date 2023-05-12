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

import { mockData, mockError, mockState } from './__mocks__/mockData';

import QuestionsAnswers from '../components/QuestionsAnswers';

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');
jest.mock('axios');

export default () => {
  const mockStore = configureStore([thunk]);
  let store;
  let dispatchMock;

  beforeEach(() => {
    jest.clearAllMocks();

    dispatchMock = jest.fn((actionOrThunk) => {
      if (typeof actionOrThunk === 'function') {
        return actionOrThunk(dispatchMock);
      }
      return null;
    });

    useDispatch.mockReturnValue(dispatchMock);
    store = mockStore();
  });

  it('should fetch qa data and dispatch it to the Redux store', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[0])));
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/SET_DATA', payload: mockData[0].results });
  });

  it('should fail and dispatch error when axios fails', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[0])));
    axios.get.mockRejectedValueOnce({ error: mockError });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/FETCH_FAILED', payload: mockError.message });
  });

  it('should display a loading icon when loading state is activated', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[0], true)));
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );
    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  it('should initialize with only four questions and add more', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1])));
    axios.get.mockResolvedValueOnce({ data: mockData[1] });

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
    axios.get.mockResolvedValueOnce({ data: mockData[1] });

    fireEvent.click(moreQuestions);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(dispatchMock).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/ADD_QUESTIONS', payload: mockData[1].results });

    questions = screen.getAllByTestId('question');

    expect(questions).toHaveLength(6);

    // Do another round of tests for the next click
    dispatchMock.mockClear();
    axios.get.mockClear();
    axios.get.mockResolvedValueOnce({ data: mockData[1] });

    fireEvent.click(moreQuestions);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(dispatchMock).toHaveBeenCalled());

    questions = screen.getAllByTestId('question');

    expect(questions).toHaveLength(7);
  });

  it('should not add more questions if axios fails', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1])));
    axios.get.mockResolvedValueOnce({ data: mockData[1] });
    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    const moreQuestions = screen.getByText('More Answered Questions');
    let questions = screen.getAllByTestId('question');
    expect(questions).toHaveLength(4);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    dispatchMock.mockClear();
    axios.get.mockClear();
    axios.get.mockRejectedValueOnce({ error: mockError });

    fireEvent.click(moreQuestions);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/FETCH_FAILED', payload: mockError.message });

    questions = screen.getAllByTestId('question');

    expect(questions).toHaveLength(4);
  });

  it('should not find any questions if no questions were found', () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[2])));
    axios.get.mockResolvedValueOnce({ data: mockData[2] });

    render(
      <Provider store={store}>
        <QuestionsAnswers />
      </Provider>,
    );

    expect(screen.getByText('No Questions Available')).toBeInTheDocument();
    expect(screen.queryAllByTestId('question')).toHaveLength(0);
  });
};
