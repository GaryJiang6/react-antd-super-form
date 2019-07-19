import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import less from 'rollup-plugin-less';
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './src/package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `src/${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `src/${pkg.module}`,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),

    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve({
      jail: './src'
    }),
    commonjs()
  ]
}