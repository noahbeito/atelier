const axios = require('axios');

module.exports.products = {
  getAll: (req, res) => {
    axios({
      url: 'products',
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  getProductById: (req, res) => {
    axios({
      url: `products/${req.params.product_id}`,
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  getStyles: (req, res) => {
    axios({
      url: `products/${req.params.product_id}/styles`,
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
};
