const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, 'node_modules/react-router-native')],
  });

  return config;
};

/*import { join } from 'path';
import createExpoWebpackConfigAsync from '@expo/webpack-config';

export default async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    // eslint-disable-next-line no-undef
    include: [join(__dirname, 'node_modules/react-router-native')],
  });

  return config;
}*/