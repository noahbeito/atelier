/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useDispatch, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import Answer from '../components/Answer';

// Data mocks:
const mockAnswer = {
  id: 1,
  body: 'idk',
  date: '2023-03-23T00:00:00.000Z',
  answerer_name: 'professor',
  helpfulness: 5,
  photos: [],
};

// Function Mocks

jest.mock('axios');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');

export default () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(jest.fn());
  });

  describe('Answer Widget Functionality', () => {
    it('should make an axios request and dispatch an action when widgets are clicked', async () => {
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const store = mockStore();

      const dispatchMock = jest.fn();
      useDispatch.mockReturnValue(dispatchMock);

      axios.put.mockResolvedValueOnce();

      const { getByText } = render(
        <Provider store={store}>
          <Answer answer={mockAnswer} />
        </Provider>,
      );

      const reportButton = getByText('Report');
      const yesButton = getByText('Yes');

      // Click report button and assert

      fireEvent.click(reportButton);

      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/answers/${mockAnswer.id}/report`));
      expect(dispatchMock).toHaveBeenCalled();

      // Clear the mock history of axios.put and dispatch
      axios.put.mockClear();
      axios.put.mockResolvedValueOnce();
      dispatchMock.mockClear();

      // Now click yes button and test
      fireEvent.click(yesButton);

      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/answers/${mockAnswer.id}/helpful`));
      expect(dispatchMock).toHaveBeenCalled();
    });
  });
};
