/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import axios from 'axios';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react';
import { useDispatch, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mockData } from './__mocks__/mockData';
import Question from '../components/Question';

// Function Mocks

jest.mock('axios');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');

export default () => {
  const mockStore = configureStore([thunk]);
  let dispatchMock;
  let store;

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

  describe('Question Accordion Component', () => {
    it('should not affect anything when clicked if there are no answers', () => {
      // Grab accordion title and body
      const { container } = render(<Question question={mockData[3].results[0]} />);
      const accordionTitle = container.getElementsByClassName('accordion-title');
      let accordionBody = container.getElementsByClassName('accordion-body');

      expect(accordionTitle).toHaveLength(1);
      expect(accordionBody).toHaveLength(1);

      // Check the initial style is zero
      let style = window.getComputedStyle(accordionBody[0]);

      expect(Number.parseInt(style['max-height'], 10)).toBe(0);

      // Click on title
      fireEvent.click(accordionTitle[0]);

      // Ensure component is not changed
      accordionBody = container.getElementsByClassName('accordion-body');
      style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBe(0);
    });

    it('should toggle the accordion state on', () => {
      // Grab accordion title and body
      const { container } = render(<Question question={mockData[0].results[0]} />);
      const accordionTitle = container.getElementsByClassName('accordion-title');
      let accordionBody = container.getElementsByClassName('accordion-body');

      expect(accordionTitle).toHaveLength(1);
      expect(accordionBody).toHaveLength(1);

      // Check the initial style is zero
      let style = window.getComputedStyle(accordionBody[0]);

      expect(Number.parseInt(style['max-height'], 10)).toBe(0);

      // Click on title
      fireEvent.click(accordionTitle[0]);

      // Ensure component is fully re-rendered with positive height
      accordionBody = container.getElementsByClassName('accordion-body');
      style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBeGreaterThan(0);

      // Click on title again
      fireEvent.click(accordionTitle[0]);

      // Ensure component is re-rendered with zero height
      accordionBody = container.getElementsByClassName('accordion-body');
      style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBe(0);
    });
  });

  describe('Question Widget Functionality', () => {
    it('should make an axios request and dispatch an action when widgets are clicked', async () => {
      axios.put.mockResolvedValueOnce();

      const { getByText } = render(
        <Provider store={store}>
          <Question question={mockData[3].results[0]} />
        </Provider>,
      );

      const reportButton = getByText('Report');
      const yesButton = getByText('Yes');

      // Click report button and assert

      fireEvent.click(reportButton);

      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${mockData[3].results[0].question_id}/report`));
      expect(dispatchMock).toHaveBeenCalled();

      // Clear the mock history of axios.put and dispatch
      axios.put.mockClear();
      axios.put.mockResolvedValueOnce();
      dispatchMock.mockClear();

      // Now click yes button and test
      fireEvent.click(yesButton);

      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${mockData[3].results[0].question_id}/helpful`));
      expect(dispatchMock).toHaveBeenCalled();
    });

    it('should not send multiple requests when widgets are clicked multiple times', async () => {
      axios.put.mockResolvedValueOnce();

      render(
        <Provider store={store}>
          <Question question={mockData[3].results[0]} />
        </Provider>,
      );

      const reportButton = screen.getByText('Report');
      const yesButton = screen.getByText('Yes');

      fireEvent.click(reportButton);
      fireEvent.click(reportButton);
      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${mockData[3].results[0].question_id}/report`));
      expect(axios.put).toHaveBeenCalledTimes(1);

      axios.put.mockClear();
      axios.put.mockResolvedValueOnce();

      fireEvent.click(yesButton);
      fireEvent.click(yesButton);
      await waitFor(() => expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${mockData[3].results[0].question_id}/helpful`));
      expect(axios.put).toHaveBeenCalledTimes(1);
    });

    it('should not open accordion when widgets are clicked', () => {
      // Mock axios resolve
      axios.put.mockResolvedValueOnce();

      const { getByText, container } = render(<Question question={mockData[3].results[0]} />);

      // Check that accordion is initially closed

      let accordionBody = container.getElementsByClassName('accordion-body');
      let style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBe(0);

      // Click `Report`

      const reportButton = getByText('Report');
      fireEvent.click(reportButton);

      // Ensure component nothing happened
      accordionBody = container.getElementsByClassName('accordion-body');
      style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBe(0);
    });
  });
};
