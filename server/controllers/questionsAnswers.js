const axios = require('axios');

module.exports.questions = {
  getAll: (req, res) => {
    axios({
      method: 'GET',
      url: '/qa/questions',
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: { product_id: req.query.product_id },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  post: (req, res) => {
    axios({
      method: 'POST',
      url: '/qa/questions',
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: {
        ...req.query,
        product_id: Number(req.query.product_id),
      },
    })
      .then((data) => res.status(201).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  markHelpful: (req, res) => {
    axios({
      method: 'PUT',
      url: `/qa/questions/${req.params.question_id}/helpful`,
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.query,
    })
      .then(() => res.sendStatus(204))
      .catch(() => res.sendStatus(404));
  },
  report: (req, res) => {
    axios({
      url: `/qa/questions/${req.params.question_id}/report`,
      method: 'put',
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.query,
    })
      .then(() => res.sendStatus(204))
      .catch(() => {
        res.sendStatus(404);
      });
  },
};

module.exports.answers = {
  getAll: (req, res) => {
    axios({
      method: 'GET',
      url: `/qa/questions/${req.params.question_id}/answers`,
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: { product_id: req.query.product_id },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  post: (req, res) => {
    axios({
      method: 'POST',
      url: `/qa/questions/${req.params.question_id}/answers`,
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: {
        ...req.query,
        product_id: Number(req.query.product_id),
      },
    })
      .then((data) => res.status(201).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  markHelpful: (req, res) => {
    axios({
      method: 'PUT',
      url: `/qa/answers/${req.params.question_id}/helpful`,
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.query,
    })
      .then(() => res.sendStatus(204))
      .catch(() => res.sendStatus(404));
  },
  report: (req, res) => {
    axios({
      url: `/qa/answers/${req.params.question_id}/report`,
      method: 'put',
      baseURL: process.env.SERVER,
      responseType: 'json',
      requestType: 'json',
      headers: { Authorization: process.env.API_TOKEN },
      params: req.query,
    })
      .then(() => res.sendStatus(204))
      .catch(() => {
        res.sendStatus(404);
      });
  },
};
