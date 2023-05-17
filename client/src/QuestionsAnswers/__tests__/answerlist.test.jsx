/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import { useDispatch, Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mockData, mockState } from './__mocks__/mockData';
import AnswersList from '../components/AnswersList';

// Function Mocks

jest.mock('axios');
// jest.mock('../components/Answer');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([thunk]);

export default () => {
  let store;
  let dispatchMock;
  beforeEach(() => {
    jest.clearAllMocks();

    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    store = mockStore();
  });

  it('should initialize with only two answers and add more', async () => {
    useSelector.mockImplementation((selector) => selector(mockState(mockData[4])));

    const { container } = render(
      <Provider store={store}>
        <AnswersList questionId="100" />
      </Provider>,
    );

    console.log('ANSWER LIST', container.innerHTML);

    let questions = screen.getAllByTestId('answer');
    expect(questions).toHaveLength(2);

    const moreAnswers = screen.getByText('See More Answers');

    fireEvent.click(moreAnswers);
    questions = screen.getAllByTestId('answer');
    expect(questions).toHaveLength(5);

    fireEvent.click(moreAnswers);
    questions = screen.getAllByTestId('answer');
    expect(questions).toHaveLength(2);
  });
};
