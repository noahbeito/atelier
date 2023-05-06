/* eslint-env jest */

import buttonTest from './button.test';
import inputTest from './textfields.test';
import starRatingTest from './starRating.test';

describe('Shared Components Test', () => {
  buttonTest();
  inputTest();
  starRatingTest();
});
