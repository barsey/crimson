import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';
import { createRequire } from 'node:module';
import rollupUrl from '@rollup/plugin-url';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        // sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        // sourcemap: true,
      },
    ],
    plugins: [
      bundleSize(),
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      rollupUrl({ include: ['**/*.ttf'] }),
      commonjs(),
      typescript({
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
        ],
        tsconfig: './tsconfig.json',
      }),
      terser(),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.ts', '.tsx'],
        exclude: 'node_modules/**',
        // sourceMaps: false,
      }),
    ],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion',
      /@babel\/runtime/,
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];
