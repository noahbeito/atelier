/* eslint-env jest */

import questionTest from './question.test';
import qaTest from './qa.test';
import answerTest from './answer.test';
import searchTest from './search.test';
import formTest from './forms.test';

describe('Questions Answers Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Search Tests', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });
    searchTest();
  });

  describe('Question Tests', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });
    questionTest();
  });

  describe('Answer Tests', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });
    answerTest();
  });

  describe('QuestionAnswer Tests', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });
    qaTest();
  });

  describe('AddQuestion and AddAnswer Tests', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });
    formTest();
  });
});
