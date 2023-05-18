const reviews = require('../controllers/reviews');

module.exports = (app) => {
  app.get('/reviews', reviews.getReviews);
  app.get('/reviews/meta', reviews.getReviewsMeta);
  app.post('/reviews', reviews.postReviews);
  app.put('/reviews/:review_id/helpful', reviews.putHelpful);
  app.put('/reviews/:review_id/report', reviews.putReport);
};
