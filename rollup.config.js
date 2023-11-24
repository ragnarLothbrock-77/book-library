import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css'

export default {
  input: 'src/app.js',
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [nodeResolve(), css({
    output: 'bundle.css'
  })]
};