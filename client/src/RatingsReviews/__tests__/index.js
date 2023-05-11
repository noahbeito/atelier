/* eslint-env jest */

import ratingsBreakdown from './ratingsBreakdown.test';

describe('Questions Answers Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  ratingsBreakdown();
});
