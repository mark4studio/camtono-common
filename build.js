import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'iife',
  globalName: 'camtono.customizer',
  platform: 'browser',
  target: ['es2017'],
  outfile: 'dist/index.js',
});