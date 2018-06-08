const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // STORYBOOK WORKAROUND
  config.entry.preview = ['./config.ts'];
  return config;
};
