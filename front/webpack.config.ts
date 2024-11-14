import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';

import {
  BuildMode,
  BuildPaths,
} from './config/build/buildTypes';
import type { Configuration } from 'webpack';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 9000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;
};
