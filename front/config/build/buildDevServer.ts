import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptions } from './buildTypes';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 9000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
