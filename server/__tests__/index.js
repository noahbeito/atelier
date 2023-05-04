/* eslint-env jest */

const app = require('../index');
const productTests = require('./products.test');
const qaTests = require('./qa.test');
const reviewsTests = request('./reviews.test');

let server;

beforeAll(() => {
  server = app.listen(3000); // start the server
});

afterAll((done) => {
  server.close(done); // stop the server
});

describe('Server Routes', () => {
  productTests(app);
  qaTests(app);
  reviewsTests(app);
});
