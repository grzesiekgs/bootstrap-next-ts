const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const runtimeConfig = require('./runtime.config');

module.exports = withPlugins([[sass]], runtimeConfig);
