/* eslint-env jest */

import buttonTest from './button.test';
import inputTest from './textfields.test';
import starRatingTest from './starRating.test';
import iconTest from './icons.test';

describe('Shared Components Test', () => {
  iconTest();
  buttonTest();
  inputTest();
  starRatingTest();
});
