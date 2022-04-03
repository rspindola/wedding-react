const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@core': 'src/core',
    '@features': 'src/features',
    '@pages': 'src/pages',
    '@shared': 'src/shared',
    '@components': 'src/components',
    '@assets': 'src/assets',
  })(config);

  return config;
};
