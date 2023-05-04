const questionsAnswers = require('./questionsAnswers');
const products = require('./products');

module.exports = (app) => {
  questionsAnswers(app);
  products(app);
};
