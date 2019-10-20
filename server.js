require('isomorphic-fetch');
require('dotenv');

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const unsupportedBrowser = require('./unsupported-browser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

const { PORT } = process.env;

app
  .prepare()
  .then(() => {
    const server = express();

    const port = PORT || 3000;

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.use(unsupportedBrowser);

    server.use(handler);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
