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
};
