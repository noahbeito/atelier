/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Related Products API', () => {
    it('should recieve array on GET /products/:product_id/related', async () => {
      const agent = request(app);
      const relatedResponse = await agent.get('/products/40349/related').expect(200);
      const relatedProducts = JSON.parse(relatedResponse.text);
      expect(relatedProducts.length).toBeGreaterThan(0);
    });
  });
};
