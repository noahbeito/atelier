/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Question from '../components/Question';

export default () => {
  describe('Question Accordion Component', () => {
    it('should not affect anything when clicked if there are no answers', () => {
      const mockQuestion = {
        answers: {},
        question_body: 'Is this a test?',
        question_helpfulness: 0,
      };

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

      // Ensure component is not changed
      accordionBody = container.getElementsByClassName('accordion-body');
      style = window.getComputedStyle(accordionBody[0]);

      expect(accordionBody).toHaveLength(1);
      expect(Number.parseInt(style['max-height'], 10)).toBe(0);
    });
    it('should toggle the accordion state on', () => {
      const mockQuestion = {
        answers: {
          0: {
            body: 'Yes!',
            photos: [],
          },
        },
        question_body: 'Is this a test?',
        question_helpfulness: 0,
      };

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
