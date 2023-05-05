const questionsAnswers = require('./questionsAnswers');
const products = require('./products');
const related = require('./related');

module.exports = (app) => {
  questionsAnswers(app);
  products(app);
  related(app);
};
