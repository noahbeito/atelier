/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Cart API', () => {
    it('should get cart on GET /cart', async () => {
      const agent = request(app);
      const cartResponse = await agent.get('/cart').expect(200);
      const cartValue = JSON.parse(cartResponse.text);
      expect(cartValue).toBeDefined();
    });
    it('should add to cart on POST /cart', async () => {
      const agent = request(app);
      await agent.post('/cart').send({
        sku_id: 1394769,
        count: 2,
      }).expect(201);
    });
  });
};
