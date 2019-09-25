require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const typescript = require('@zeit/next-typescript');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const dotenv = require('dotenv-webpack');

const config = {
  distDir: '../dist',
};

module.exports = withPlugins([
  [typescript],
  [css],
  [optimizedImages],
], {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  },
  ...config,
});
