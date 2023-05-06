const questionsAnswers = require('./questionsAnswers');
const products = require('./products');
const related = require('./related');
const reviews = require('./reviews');
const carts = require('./cart');

module.exports = (app) => {
  questionsAnswers(app);
  products(app);
  related(app);
  reviews(app);
  carts(app);
};
