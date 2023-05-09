/* eslint-env jest */

import accordionTest from './accordion.test';
import qaTest from './qa.test';

describe('Questions Answers Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  accordionTest();
  qaTest();
});
