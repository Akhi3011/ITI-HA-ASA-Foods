const { override, disableEsLint, addBabelPlugin } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin(['@babel/plugin-proposal-private-property-in-object', { loose: true }]),
  (config) => {
    // Remove fork-ts-checker-webpack-plugin completely
    config.plugins = config.plugins.filter(
      plugin => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    );
    return config;
  }
);
