/* eslint-disable */
require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')({ devtool: 'hidden-source-map' });
const optimizedImages = require('next-optimized-images');
const dotenv = require('dotenv-webpack');

const config = {
  distDir: 'dist',
};

module.exports = withPlugins([
  [css],
  [optimizedImages],
], withSourceMaps({
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config;
  },
  ...config,
}));
