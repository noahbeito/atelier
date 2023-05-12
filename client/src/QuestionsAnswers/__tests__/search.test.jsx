import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { mockData, mockState } from './__mocks__/mockData';

import Search from '../components/Search';
import QuestionsAnswers from '../components/QuestionsAnswers';

const mockStore = configureStore([thunk]);

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('axios');

export default () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    axios.get.mockResolvedValueOnce({ data: { ...mockData[1] } });

    store = mockStore();
  });

  it('should dispatch the correct actions on search', async () => {
    const text = 'h';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, '')));

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
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

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
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should not change if fewer than three characters have been entered', () => {
    const text = 'he';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should filter when text has been entered', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
      </Provider>,
    );

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(3);
  });

  it('should not find any questions when search result finds none', () => {
    const text = 'something that cannot be found';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
      </Provider>,
    );
    expect(screen.queryByText(`There are no questions to match query "${text}"`)).toBeInTheDocument();
    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(0);
  });

  xit('should load to next found loaded item when "More Answered Questions" is pressed', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
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

  xit('should highlight responses with class `mark` whenever there are searches', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
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
