/* eslint-env jest */

const app = require('../index');
const productTests = require('./products.test');
const qaTests = require('./qa.test');

describe('Server Routes', () => {
  productTests(app);
  qaTests(app);
});
