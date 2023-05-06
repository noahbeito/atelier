const { cart } = require('../controllers/cart');

module.exports = (app) => {
  app.get('/cart', cart.get);
  app.post('/cart', cart.post);
};
