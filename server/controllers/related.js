const axios = require('axios');

module.exports.related = {
  getAll: (req, res) => {
    axios({
      url: `/products/${req.params.product_id}/related`,
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then((data) => res.status(200).send(data.data))
      .catch((err) => res.status(500).send(err));
  },
};
