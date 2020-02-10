const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  publicRuntimeConfig: {
    env: {
      NODE_ENV
    }
  },
  serverRuntimeConfig: {}
};
