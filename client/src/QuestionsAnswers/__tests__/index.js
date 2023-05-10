/* eslint-env jest */

import questionTest from './question.test';
import qaTest from './qa.test';
import answerTest from './answer.test';

describe('Questions Answers Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  questionTest();
  answerTest();
  qaTest();
});
