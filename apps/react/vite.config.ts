import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, './index.ts'),
        name: 'meplay',
        fileName: (format) => `meplay.${format}.js`,
      },
      rollupOptions: {
        external: ['react'],
        output: {
          globals: {
            react: 'react',
          },
        },
        plugins: [
          typescript({
            target: 'es2015', // 这里指定编译到的版本，
            rootDir: path.resolve(__dirname, 'src'),
            declaration: true,
            declarationDir: path.resolve(__dirname, 'dist'),
            exclude: path.resolve(__dirname, 'node_modules/**'),
            allowSyntheticDefaultImports: true,
          }),
        ],
      },
    },
  };
});
