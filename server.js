const path = require('path'),
      express = require('express'),
      webpack = require('webpack'),
      webpackMiddleware = require('webpack-dev-middleware'),
      webpackConfig = require('./webpack.config');

const app = new express();
const PORT = 8081;

if (process.env.NODE_ENV === 'development') {
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT);
