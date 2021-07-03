import cors from 'cors';
import express from 'express';
import proxy from 'express-http-proxy'

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// * Routes * //



app.use('/switcher', proxy((req) => req.body.targeturl, {
  proxyReqPathResolver: function(req, res) {
    console.log("hey " + req.body.targeturl)
    return req.body.targeturl
  }
}));

// * Start * //


const port = 5000;
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
