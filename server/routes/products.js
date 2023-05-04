const { products } = require('../controllers/products');

module.exports = (app) => {
  app.get('/products', products.getAll);
};
