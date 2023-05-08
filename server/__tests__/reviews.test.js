/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  const agent = request(app);

  async function productId() {
    const productsResponse = await agent.get('/products').expect(200);
    return JSON.parse(productsResponse.text)[0].id;
  }

  async function reviewId() {
    const reviewsResponse = await agent.get('/reviews').query({
      product_id: await productId(),
      page: 1,
      count: 1,
    }).expect(200);
    return reviewsResponse.body.results[0].review_id;
  }

  describe('Reviews & Rating Routes API', () => {
    it('should receive an object on GET/reviews with query: {page: 1, count: 5}', async () => {
      const reviewsResponse = await agent.get('/reviews').query({
        product_id: await productId(),
        page: 1,
        count: 5,
      }).expect(200);

      const reviewsData = reviewsResponse.body.results;

      expect(reviewsData.length).toBe(5);
    });

    it('should receive an object on GET/meta', async () => {
      const reviewsMetaResponse = await agent.get('/reviews/meta').query({
        product_id: await productId(),
      }).expect(200);

      const reviewsMetaData = reviewsMetaResponse.body;

      const metaDataProperties = ['product_id', 'ratings', 'recommended', 'characteristics'];
      metaDataProperties.forEach((property) => {
        expect(reviewsMetaData).toHaveProperty(property);
      });
    });

    xit('should receive a status code 201 on POST/reviews', async () => {
      await agent.post('/reviews')
        .query({
          product_id: await productId(),
          rating: 4,
          summary: 'Great',
          body: 'Test Review',
          recommmend: true,
          name: 'TestReviewer',
          email: 'Test@atlier.com',
          photos: [],
          characteristics: {}, // Need to determine what the characteristics_id are
        })
        .expect(201);
    });

    it('should receive 204 status on PUT/reviews/:reviews_id/helpful', async () => {
      const testReviewId = await reviewId();
      await agent.put(`/reviews/${testReviewId}/helpful`)
        .expect(204);
    });

    it('should receive 204 status on PUT/reviews/:reviews_id/report', async () => {
      const testReviewId = await reviewId();
      await agent.put(`/reviews/${testReviewId}/report`)
        .expect(204);
    });
  });
};
