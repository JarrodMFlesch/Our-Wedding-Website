require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
  sassLoaderOptions: {
    includePaths: ['scss'],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
});
