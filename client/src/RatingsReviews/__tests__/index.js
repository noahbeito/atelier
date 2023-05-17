/* eslint-env jest */

import reviews from './reviews.test';
import metadata from './metadata.test';
import ratingBreakdown from './ratingBreakdown.test';
import reviewList from './reviewList.test';

describe('Ratings Review Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  reviews();
  metadata();
  ratingBreakdown();
  // reviewList();
});
