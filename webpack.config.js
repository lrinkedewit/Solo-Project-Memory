const path = require('path');

module.exports = {
  // ROLE: switching between development and production
  mode: 'development',
  // 
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'bundle'),
      publicPath: '/',
    },
  },
  // ROLE: All new information comes in at our server
  entry: './server/index.js',
  // ROLE: Here, our minified and uglified code is funneled for production
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
  module: {
    // ROLE: Necessary rules to apply loaders
    rules: [
      {
        // ROLE: Ensuring webpack can read jsx
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        // ROLE: Excluding node-modules from compiling
        exclude: /node_modules/,
      },
      {
        // ROLE: Ensuring webpack can read css & scss
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // ROLE: Ensuring webpack can read images
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: 'url-loader',
      },
    ],
  },
};

