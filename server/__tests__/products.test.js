/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Products API', () => {
    it('should recieve object on GET /products', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const products = JSON.parse(productsResponse.text);
      expect(products).toBeDefined();
    });
  });
};
