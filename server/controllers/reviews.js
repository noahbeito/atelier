const axios = require('axios');

module.exports = {
  getReviews: (req, res) => {
    axios({
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
        console.log(`Success at GET/reviews for ${JSON.stringify(req.query)} with ${result.data.length} results`);
        res.status(200);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  getReviewsMeta: (req, res) => {
    axios({
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
        console.log(`Success at GET/reviews/meta for ${JSON.stringify(req.query)} with ${result.data.product_id} results`);
        res.status(200);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  postReviews: (req, res) => {
    axios({
      baseURL: process.env.SERVER,
      url: '/reviews',
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: {
        product_id: req.query.product_id,
        rating: req.query.ratings,
        summary: req.query.summary,
        body: req.query.body,
        recommmend: req.query.recommmend,
        name: req.query.name,
        email: req.query.email,
        photos: req.query.photos,
        characteristics: req.query.characteristics,
      },
    })
      .then((result) => {
        console.log(`Success at POST/reviews for ${req.query.product_id} for product ${req.query.product_id}`);
        res.status(201);
        res.send(result.data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  },

  putHelpful: (req, res) => {

  },

  putReport: (req, res) => {

  },
};
