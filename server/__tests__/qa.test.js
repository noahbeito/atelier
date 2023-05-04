/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Questions API', () => {
    it('should receive object on GET /qa/questions with a product_id', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const productId = JSON.parse(productsResponse.text)[0].id;
      const questionsResponse = await agent.get('/qa/questions').query({ product_id: productId }).expect(200);
      const questions = JSON.parse(questionsResponse.text);
      expect(questions).toBeDefined();
    });

    xit('should successfully receive POST on /qa/questions with a product_id', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const productId = JSON.parse(productsResponse.text)[0].id;
      await agent.post('/qa/questions').query({
        product_id: productId,
        body: 'testing a question',
        name: 'ImaBStrong',
        email: 'example@gmail.com',
      }).expect(201);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/helpful', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const productId = JSON.parse(productsResponse.text)[0].id;
      const questionsResponse = await agent.get('/qa/questions').query({ product_id: productId }).expect(200);
      const questionId = JSON.parse(questionsResponse.text).results[0];
      await agent.put(`/qa/questions/${questionId}/helpful`).expect(204);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/report', async () => {
      const agent = request(app);
      const productsResponse = await agent.get('/products').expect(200);
      const productId = JSON.parse(productsResponse.text)[0].id;
      const questionsResponse = await agent.get('/qa/questions').query({ product_id: productId }).expect(200);
      const questionId = JSON.parse(questionsResponse.text).results[0];
      await agent.put(`/qa/questions/${questionId}/report`).expect(204);
    });
  });
};
