import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// * Routes * //

var proxy = require('express-http-proxy');

app.use('/switcher', proxy((req) => req.body.targeturl, {
  proxyReqPathResolver: function(req, res) {
    console.log("hey " + req.body.targeturl)
    return req.body.targeturl
  }
}));

// * Start * //



app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
