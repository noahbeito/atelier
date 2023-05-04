require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

// Middleware

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

// Set up routes
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});

module.exports = app;
