const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// Provide prod or dev config.
module.exports = (phase) => ({
  publicRuntimeConfig: {
    isDev: phase === PHASE_DEVELOPMENT_SERVER,
    env: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
  serverRuntimeConfig: {}
});
