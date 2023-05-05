const questionsAnswers = require('./questionsAnswers');
const products = require('./products');
const related = require('./related');
const reviews = require('./reviews');

module.exports = (app) => {
  questionsAnswers(app);
  products(app);
  related(app);
  reviews(app);
};
