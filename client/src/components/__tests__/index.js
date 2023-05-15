/* eslint-env jest */

import buttonTest from './button.test';
import inputTest from './textfields.test';
import starRatingTest from './starRating.test';
import iconTest from './icons.test';
import modalTest from './modal.test';
import formTest from './form.test';

describe('Shared Components Test', () => {
  formTest();
  modalTest();
  iconTest();
  buttonTest();
  inputTest();
  starRatingTest();
});
