import path from 'path';
import { defineConfig } from 'vite';
import packageJson from './package.json';
import solid from 'vite-plugin-solid';

export default defineConfig({
    plugins: [solid()],
    base: './',
    build: {
        outDir: './build',
        rollupOptions: {
            output: {
                entryFileNames: `assets/${packageJson.name}.js`,
                assetFileNames: `assets/${packageJson.name}.css`
            }
        },
        sourcemap: true
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@@', replacement: path.resolve(__dirname) }
        ]
    }
});
