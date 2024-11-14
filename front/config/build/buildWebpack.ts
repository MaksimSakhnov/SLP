import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';

import type { Configuration } from 'webpack';
import type { BuildOptions } from './buildTypes';

export function buildWebpack(options: BuildOptions): Configuration {
  const { paths, mode } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
