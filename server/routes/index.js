const questionsAnswers = require('./questionsAnswers');
const products = require('./products');
const reviews = require('./reviews');

module.exports = (app) => {
  questionsAnswers(app);
  products(app);
  reviews(app);
};
