const { related } = require('../controllers/related');

module.exports = (app) => {
  app.get('/products/:product_id/related', related.getAll);
};
