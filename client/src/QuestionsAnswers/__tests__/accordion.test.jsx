/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Question from '../components/Question';

// Data mocks:
const mockQuestion = {
  question_id: 123,
  question_body: 'Is this a test?',
  question_date: '2018-02-28T00:00:00.000Z',
  asker_name: 'tester',
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
};

const mockQuestionWithoutAnswers = {
  question_id: 321,
  question_body: 'Does this have answers?',
  question_date: '2018-02-28T00:00:00.000Z',
  asker_name: 'tester',
  question_helpfulness: 12,
  reported: false,
  answers: {},
};

// Function Mocks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../components/AnswersList');
const dispatchMock = jest.fn();
useDispatch.mockReturnValue(dispatchMock);

export default () => {
  describe('Question Accordion Component', () => {
    it('should not affect anything when clicked if there are no answers', () => {
      // Grab accordion title and body
      const { container } = render(<Question question={mockQuestionWithoutAnswers} />);
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
      const { container } = render(<Question question={mockQuestion} />);
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
};
