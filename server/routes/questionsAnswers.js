const { questions, answers } = require('../controllers/questionsAnswers');

module.exports = (app) => {
  // Questions
  app.get('/qa/questions', questions.getAll);
  app.post('/qa/questions', questions.post);
  app.put('/qa/questions/:question_id/helpful', questions.markHelpful);
  app.put('/qa/questions/:question_id/report', questions.report);

  // Answers
  app.get('/qa/questions/:question_id/answers', answers.getAll);
  app.post('/qa/questions/:question_id/answers', answers.post);
  app.put('/qa/questions/:answer_id/helpful', answers.markHelpful);
  app.put('/qa/questions/:answer_id/report', answers.report);
};
