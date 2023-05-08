const axios = require('axios');

module.exports.related = {
  getAll: (req, res) => {
    axios({
      method: 'get',
      url: `/products/${req.params.product_id}/related`,
      requestType: 'json',
      responseType: 'json',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
    })
      .then((data) => res.status(200).send(data.data))
      .catch((err) => {
        console.log('ERR', err.stack);
        res.status(500).send(err);
      });
  },
};
