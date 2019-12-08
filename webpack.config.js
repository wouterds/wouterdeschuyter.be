/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    healthcheck: './src/scripts/healthcheck.ts',
  },
  output: { path: path.resolve(__dirname, './dist') },
  resolve: { extensions: ['.ts'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
};
