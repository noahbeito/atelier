const axios = require('axios');

module.exports.cart = {
  get: (req, res) => {
    axios({
      url: 'cart',
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  post: (req, res) => {
    axios({
      url: 'cart',
      method: 'post',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      data: req.body,
    })
      .then((data) => res.status(201).send(data.data))
      .catch(() => res.sendStatus(500));
  },
};
