const axios = require('axios');

module.exports.questions = {
  getAll: (req, res) => {
    axios({
      url: '/qa/questions',
      method: 'get',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      params: { product_id: req.query.product_id },
    })
      .then((data) => res.status(200).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  post: (req, res) => {
    axios({
      url: '/qa/questions',
      method: 'post',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then((data) => res.status(201).send(data.data))
      .catch(() => res.sendStatus(500));
  },
  markHelpful: (req, res) => {
    axios({
      url: `/qa/questions/${req.params.question_id}/helpful`,
      method: 'put',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then(() => res.sendStatus(204))
      .catch(() => res.sendStatus(404));
  },
  report: (req, res) => {
    axios({
      url: `/qa/questions/${req.params.question_id}/report`,
      method: 'put',
      baseURL: process.env.SERVER,
      headers: { Authorization: process.env.API_TOKEN },
      params: req.params,
    })
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(404);
      });
  },
};

module.exports.answers = {
  getAll: (req, res) => axios({
    url: `/qa/questions/${req.params.question_id}/answers`,
    method: 'get',
    baseURL: process.env.SERVER,
    headers: { Authorization: process.env.API_TOKEN },
    params: req.params,
  })
    .then((data) => res.status(200).send(data.data))
    .catch(() => res.sendStatus(404)),
  post: (req, res) => axios({
    url: `/qa/questions/${req.params.question_id}/answers`,
    method: 'post',
    baseURL: process.env.SERVER,
    headers: { Authorization: process.env.API_TOKEN },
    params: req.params,
  })
    .then((data) => res.status(201).send(data.data))
    .catch(() => res.sendStatus(404)),
  markHelpful: (req, res) => axios({
    url: `/qa/answers/${req.params.answer_id}/helpful`,
    method: 'put',
    baseURL: process.env.SERVER,
    headers: { Authorization: process.env.API_TOKEN },
    params: req.params,
  })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404)),
  report: (req, res) => axios({
    url: `/qa/answers/${req.params.answer_id}/report`,
    method: 'put',
    baseURL: process.env.SERVER,
    headers: { Authorization: process.env.API_TOKEN },
    params: req.params,
  })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404)),
};
