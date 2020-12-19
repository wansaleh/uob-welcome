const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(
  [
    'tailwindcss'
    // '@chakra-ui/react',
    // '@chakra-ui/accordion',
    // '@chakra-ui/alert',
    // '@chakra-ui/avatar',
    // '@chakra-ui/breadcrumb',
    // '@chakra-ui/button',
    // '@chakra-ui/checkbox',
    // '@chakra-ui/close-button',
    // '@chakra-ui/color-mode',
    // '@chakra-ui/control-box',
    // '@chakra-ui/counter',
    // '@chakra-ui/css-reset',
    // '@chakra-ui/editable',
    // '@chakra-ui/form-control',
    // '@chakra-ui/hooks',
    // '@chakra-ui/icon',
    // '@chakra-ui/image',
    // '@chakra-ui/input',
    // '@chakra-ui/layout',
    // '@chakra-ui/live-region',
    // '@chakra-ui/media-query',
    // '@chakra-ui/menu',
    // '@chakra-ui/modal',
    // '@chakra-ui/number-input',
    // '@chakra-ui/pin-input',
    // '@chakra-ui/popover',
    // '@chakra-ui/popper',
    // '@chakra-ui/portal',
    // '@chakra-ui/progress',
    // '@chakra-ui/radio',
    // '@chakra-ui/select',
    // '@chakra-ui/skeleton',
    // '@chakra-ui/slider',
    // '@chakra-ui/spinner',
    // '@chakra-ui/stat',
    // '@chakra-ui/styled-system',
    // '@chakra-ui/switch',
    // '@chakra-ui/system',
    // '@chakra-ui/table',
    // '@chakra-ui/tabs',
    // '@chakra-ui/tag',
    // '@chakra-ui/textarea',
    // '@chakra-ui/theme',
    // '@chakra-ui/theme-tools',
    // '@chakra-ui/toast',
    // '@chakra-ui/tooltip',
    // '@chakra-ui/transition',
    // '@chakra-ui/utils',
    // '@chakra-ui/visually-hidden',
    // 'react-hook-inview',
    // 'react-device-detect',
    // 'framer-motion'
    // 'use-mobile-detect-hook',
    // 'react-masonry-css',
    // 'react-awesome-reveal'
  ]
  // { debug: true }
);

const useBasePath =
  process.env.USE_BASEPATH === 'true'
    ? {
        basePath: '/cardswelcome',
        assetPrefix: '/cardswelcome'
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
