const { resolve } = require('path')
module.exports = {
  entry: {
    main: ['./main.js'],
  },
  devtool: false,
  mode: 'development',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  node: false,
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [],
    mainFields: ['es2015', 'module', 'main'],
  },
};
