import React from 'react';
import axios from 'axios';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

import { mockData, mockError } from './__mocks__/mockData';

import AddQuestion from '../components/AddQuestion';
import AddAnswer from '../components/AddAnswer';

// Mock functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');
jest.mock('axios');
// jest.mock('URL');

export default () => {
  const mockStore = configureStore([thunk]);
  let store;
  let dispatchMock;

  global.URL.createObjectURL = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    dispatchMock = jest.fn((actionOrThunk) => {
      if (typeof actionOrThunk === 'function') {
        return actionOrThunk(dispatchMock);
      }
      return null;
    });

    global.URL.createObjectURL = jest.fn((filename) => filename);

    useDispatch.mockReturnValue(dispatchMock);
    store = mockStore();
  });

  it('should send a request on submission of a question form', async () => {
    axios.post.mockResolvedValueOnce({});
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    const body = 'Hello world?';
    const name = 'ImaBATest';
    const email = 'ima@testing.com';

    render(
      <Provider store={store}>
        <AddQuestion productId="1234" handleCloseModal={() => {}} />
      </Provider>,
    );
    fireEvent.change(screen.getByTestId('question-field'), { target: { value: body } });
    fireEvent.change(screen.getByTestId('nickname-field'), { target: { value: name } });
    fireEvent.change(screen.getByTestId('email-field'), { target: { value: email } });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(6);

    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/ADD_QUESTIONS', payload: [{ name, body, email }] });

    expect(dispatchMock).toHaveBeenNthCalledWith(5, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(6, { type: '@questions/SET_DATA', payload: mockData[0].results });
  });

  it('should fail to send a request for question when axios fails', async () => {
    axios.post.mockRejectedValueOnce({ error: mockError });
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    const body = 'Hello world?';
    const name = 'ImaBATest';
    const email = 'ima@testing.com';

    render(
      <Provider store={store}>
        <AddQuestion productId="1234" handleCloseModal={() => {}} />
      </Provider>,
    );
    fireEvent.change(screen.getByTestId('question-field'), { target: { value: body } });
    fireEvent.change(screen.getByTestId('nickname-field'), { target: { value: name } });
    fireEvent.change(screen.getByTestId('email-field'), { target: { value: email } });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);

    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/FETCH_FAILED', payload: mockError.message });
  });

  it('should send a request on submission of a question form', async () => {
    axios.post.mockResolvedValueOnce({});
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    const body = 'Hello world?';
    const name = 'ImaBATest';
    const email = 'ima@testing.com';
    const photos = ['hello.jpg', 'bye.jpg'];

    render(
      <Provider store={store}>
        <AddAnswer productId="1234" questionId="123" handleCloseModal={() => {}} />
      </Provider>,
    );
    fireEvent.change(screen.getByTestId('question-field'), { target: { value: body } });
    fireEvent.change(screen.getByTestId('nickname-field'), { target: { value: name } });
    fireEvent.change(screen.getByTestId('email-field'), { target: { value: email } });
    fireEvent.change(screen.getByTestId('image-field'), { target: { files: photos } });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(6);

    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, {
      type: '@answers/ADD_ANSWER',
      payload: {
        name,
        body,
        email,
        photos,
      },
    });

    expect(dispatchMock).toHaveBeenNthCalledWith(5, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(6, { type: '@questions/SET_DATA', payload: mockData[0].results });
  });

  it('should fail to send a request for answer when axios fails', async () => {
    axios.post.mockRejectedValueOnce({ error: mockError });
    axios.get.mockResolvedValueOnce({ data: mockData[0] });

    const body = 'Hello world?';
    const name = 'ImaBATest';
    const email = 'ima@testing.com';
    const photos = ['hello.jpg', 'bye.jpg'];

    render(
      <Provider store={store}>
        <AddAnswer productId="1234" questionId="123" handleCloseModal={() => {}} />
      </Provider>,
    );
    fireEvent.change(screen.getByTestId('question-field'), { target: { value: body } });
    fireEvent.change(screen.getByTestId('nickname-field'), { target: { value: name } });
    fireEvent.change(screen.getByTestId('email-field'), { target: { value: email } });
    fireEvent.change(screen.getByTestId('image-field'), { target: { files: photos } });

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(dispatchMock).toHaveBeenCalledTimes(3);

    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: '@questions/FETCH_DATA' });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: '@questions/FETCH_FAILED', payload: mockError.message });
  });
};
