/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Questions/Answers Route API', () => {
    const agent = request(app);

    let productId;
    let questionId;
    let answerId;

    // Questions Tests

    it('should receive object on GET /qa/questions with a product_id', async () => {
      const productsResponse = await agent.get('/products').expect(200);
      productId = JSON.parse(productsResponse.text)[0].id;

      const questionsResponse = await agent.get('/qa/questions').query({
        product_id: productId,
      }).expect(200);
      // questionId = JSON.parse(questionsResponse.text).results[0].question_id;
    });

    xit('should successfully receive POST on /qa/questions with a product_id', async () => {
      await agent.post('/qa/questions').query({
        product_id: productId,
        body: 'Testing Questions',
        name: 'TestReviewer',
        email: 'test@atlier.com',
      }).expect(201);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/helpful', async () => {
      await agent.put(`/qa/questions/${questionId}/helpful`).expect(204);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/report', async () => {
      await agent.put(`/qa/questions/${questionId}/report`).expect(204);
    });

    // Answers Tests

    xit('should receive object on GET /qa/questions/:question_id/answers', async () => {
      const answersResponse = await agent.get(`/qa/questions/${questionId}/answers`).query({
        product_id: productId,
      }).expect(200);
      answerId = JSON.parse(answersResponse.text).results[0].answer_id;
    });

    xit('should successfully receive POST on /qa/questions with a product_id', async () => {
      await agent.post(`/qa/questions/${questionId}/answers`).query({
        body: 'Testing Questions',
        name: 'TestReviewer',
        email: 'test@atlier.com',
        photos: ['/fakeUrl.jpg', '/lol.jpg'],
      }).expect(201);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/helpful', async () => {
      await agent.put(`/qa/answers/${answerId}/helpful`).expect(204);
    });

    xit('should successfully receive PUT on /qa/questions/:question_id/report', async () => {
      await agent.put(`/qa/answers/${answerId}/report`).expect(204);
    });
  });
};
