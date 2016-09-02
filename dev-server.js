var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var config = require('./config.dev');

new devServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(config.server.port, config.server.address, function (err, result) {
  if (err) {
    return console.log(err);
  }
});
