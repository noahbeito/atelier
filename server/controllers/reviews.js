const axios = require('axios');

module.exports = {
  getReviews: (req, res) => {
    axios({
      method: 'GET',
      baseURL: process.env.SERVER,
      url: '/reviews',
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: {
        page: req.query.page,
        count: req.query.count,
        sort: req.query.sort,
        product_id: req.query.product_id,
      },
    })
      .then((result) => {
        res.status(200);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  getReviewsMeta: (req, res) => {
    axios({
      method: 'GET',
      baseURL: process.env.SERVER,
      url: '/reviews/meta',
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: {
        product_id: req.query.product_id,
      },
    })
      .then((result) => {
        res.status(200);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  postReviews: (req, res) => {
    axios({
      method: 'POST',
      baseURL: process.env.SERVER,
      url: '/reviews',
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      // params: req.params,
      data: req.data,
    })
      .then((result) => {
        res.status(201);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  putHelpful: (req, res) => {
    axios({
      method: 'PUT',
      baseURL: process.env.SERVER,
      url: `/reviews/${req.params.review_id}/helpful`,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  putReport: (req, res) => {
    axios({
      method: 'PUT',
      baseURL: process.env.SERVER,
      url: `/reviews/${req.params.review_id}/report`,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },
};
