// const path = require('path');

// path1 = path.relative("geeks/website", "geeks/index.html");
// console.log(path1)

// console.log(__dirname)
// console.log(__filename)

const webpack = require('webpack'); //to access webpack runtime
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  console.log(err)
});