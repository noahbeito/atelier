import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import Search from '../components/Search';
import QuestionsAnswers from '../components/QuestionsAnswers';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('axios');

// Mock data

const mockData = {
  product_id: '1234',
  results: [
    {
      question_id: 200,
      question_body: 'Hello World?',
      answers: {},
    },
    {
      question_id: 201,
      question_body: 'Hello?',
      answers: {},
    },
    {
      question_id: 202,
      question_body: 'What is hello?',
      answers: {},
    },
    {
      question_id: 203,
      question_body: 'Is this hXllo okay?',
      answers: {},
    },
    {
      question_id: 204,
      question_body: 'This is not a question?',
      answers: {},
    },
    {
      question_id: 205,
      question_body: 'Who is a question then?',
      answers: {},
    },
    {
      question_id: 206,
      question_body: 'Hello??',
      answers: {},
    },
  ],
};

const mockState = (text) => ({
  product: {
    loading: false,
    data: {
      id: 123,
    },
    error: null,
  },
  questionsAnswers: {
    main: {
      loading: false,
      questions: mockData.results,
    },
    search: {
      text,
    },
  },
});

export default () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    axios.get.mockResolvedValueOnce({ data: { ...mockData } });

    store = mockStore();
  });

  it('should dispatch the correct actions on search', async () => {
    const text = 'h';
    useSelector.mockImplementation((selector) => selector(mockState('')));

    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const searchBar = screen.getByTestId('search');
    fireEvent.change(searchBar, { target: { value: text } });

    expect(dispatchMock).toHaveBeenCalledWith({ type: '@qa/search/SET_SEARCH', payload: text });
  });

  it('should not dispatch if nothing about the text has changed', async () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const searchBar = screen.getByTestId('search');
    fireEvent.change(searchBar, { target: { value: text } });

    expect(dispatchMock).not.toHaveBeenCalledWith({ type: '@qa/search/SET_SEARCH', payload: text });
  });

  it('should display all available items when nothing has been entered', () => {
    const text = '';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData.results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should not change if fewer than three characters have been entered', () => {
    const text = 'he';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData.results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should filter when text has been entered', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData.results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(3);
  });

  it('should load to next found loaded item when "More Answered Questions" is pressed', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData.results} />
      </Provider>,
    );

    let questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(3);

    // Click button
    const moreQuestions = screen.getByText('More Answered Questions');
    fireEvent.click(moreQuestions);

    questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should highlight responses with class `mark` whenever there are searches', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData.results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(3);

    const marks = screen.getAllByText(text);

    expect(marks).toHaveLength(3);

    marks.forEach((mark) => {
      expect(mark.classList.contains('mark')).toBe(true);
    });
  });
};
