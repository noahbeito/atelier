/* eslint-env jest */

const app = require('../index');
const productTests = require('./products.test');
const qaTests = require('./qa.test');
const relatedTests = require('./related.test');

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
  relatedTests(app);
});
