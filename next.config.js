const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps');
const nextConfig = require('./runtime.config');

module.exports = withPlugins([withSass, withSourceMaps], {
  webpack: (config, { defaultLoaders }) => {
    // Probably a better way to do this: https://github.com/nuxt-community/modules/issues/98#issuecomment-318736546
    if (defaultLoaders.babel.options.plugins === undefined) {
      defaultLoaders.babel.options.plugins = [];
    }

    const sassLoadersRules = config.module.rules.find((rule) => '.scss'.match(rule.test));
    sassLoadersRules.use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: [
          // './styles/variables.scss'
        ]
      }
    });

    return config;
  },
  /*
  async generateBuildId() {
    try {
      const buildHash = require('fs').readFileSync('./versionTag.txt');
      return buildHash.toString();
    } catch (e) {
      console.error(e);
      return null; // next.js generate random hash
    }
  },
  */
  ...nextConfig
});
