const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['tailwindcss']);

const useBasePath =
  process.env.USE_BASEPATH === 'true'
    ? {
        basePath: '/uobwelcome',
        assetPrefix: '/uobwelcome'
      }
    : {};

module.exports = withPlugins(
  [
    [withTM],
    [
      withImages,
      {
        inlineImageLimit: -1
      }
    ],
    [withFonts]
  ],
  {
    ...useBasePath,
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };

      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./client/polyfills.js')
        ) {
          entries['main.js'].unshift('./client/polyfills.js');
        }

        return entries;
      };

      return config;
    }
  }
);
