/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Products API', () => {
    it('should recieve object on GET /products', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const products = JSON.parse(productsResponse.text);
      expect(products.length).toBeGreaterThan(0);
    });
    it('should recieve object on GET /products/product_id', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products/40344').expect(200);
      const productById = JSON.parse(productsResponse.text);
      expect(productById).toHaveProperty('id');
    });
    it('should recieve object on GET /products/product_id/styles', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products/40344/styles').expect(200);
      const productStyles = JSON.parse(productsResponse.text);
      expect(productStyles.results.length).toBeGreaterThan(0);
    });
  });
};
