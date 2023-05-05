/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Questions/Answers Route API', () => {
    const agent = request(app);

    const productId = 40353;
    let questionId;
    let answerId;

    // Questions Tests

    it('should successfully receive GET and POST on /qa/questions', async () => {
      await agent.post('/qa/questions').send({
        product_id: productId,
        body: 'Testing Questions',
        name: 'TestReviewer',
        email: 'test@atlier.com',
      }).expect(201);

      const questionsResponse = await agent.get('/qa/questions').query({
        product_id: productId,
      }).expect(200);

      // Get ID of the added question
      const content = JSON.parse(questionsResponse.text).results;
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBeGreaterThan(0);
      expect(content[content.length - 1].question_id).toBeDefined();
      questionId = content[content.length - 1].question_id;
    });

    it('should successfully receive PUT on /qa/questions/:question_id/helpful', async () => {
      await agent.put(`/qa/questions/${questionId}/helpful`).expect(204);
    });

    it('should successfully receive GET and POST on /qa/questions/:question_id/answers', async () => {
      await agent.post(`/qa/questions/${questionId}/answers`).send({
        body: 'Testing Answers',
        name: 'TestReviewer',
        email: 'test@atlier.com',
        photos: ['/fakeUrl.jpg', '/lol.jpg'],
      }).expect(201);

      const answersResponse = await agent.get(`/qa/questions/${questionId}/answers`).query({
        product_id: productId,
      }).expect(200);

      const content = JSON.parse(answersResponse.text).results;
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBeGreaterThan(0);
      expect(content[content.length - 1].answer_id).toBeDefined();

      answerId = content[0].answer_id;
    });

    it('should successfully receive PUT on /qa/answers/:answer_id/helpful', async () => {
      await agent.put(`/qa/answers/${answerId}/helpful`).expect(204);
    });

    // Report tests are last since they will effectively delete the added questions/answers:

    it('should successfully receive PUT on /qa/answers/:question_id/report', async () => {
      await agent.put(`/qa/answers/${answerId}/report`).expect(204);
    });

    it('should successfully receive PUT on /qa/questions/:question_id/report', async () => {
      await agent.put(`/qa/questions/${questionId}/report`).expect(204);
    });
  });
};
