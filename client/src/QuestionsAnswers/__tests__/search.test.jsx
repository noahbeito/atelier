import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
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
    dispatchMock = jest.fn((actionOrThunk) => {
      if (typeof actionOrThunk === 'function') {
        return actionOrThunk(dispatchMock);
      }
      return null;
    });
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

  it('should load to next found loaded item when "More Answered Questions" is pressed', async () => {
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

    // Wait until all asynchronous methods finish
    await waitFor(() => expect(dispatchMock).toHaveBeenCalledTimes(6));

    // Then check that just the one more `hello` was added
    questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(4);
  });

  it('should highlight responses with class `mark` whenever there are searches', () => {
    const text = 'hello';
    useSelector.mockImplementation((selector) => selector(mockState(mockData[1], false, text)));

    const { container } = render(
      <Provider store={store}>
        <QuestionsAnswers questions={mockData[1].results} />
      </Provider>,
    );

    console.log(container.outerHTML);

    const questions = screen.queryAllByTestId('question');
    expect(questions).toHaveLength(3);

    // Us
    const marks = screen.getAllByText(new RegExp(String.raw`${text}`, 'i'));

    expect(marks).toHaveLength(3);

    marks.forEach((mark) => {
      expect(mark.classList.contains('mark')).toBe(true);
    });
  });
};
