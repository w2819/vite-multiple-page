import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const port = 3000;
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'main.html'),
                about: resolve(__dirname, 'about.html'),
                nested: resolve(__dirname, 'nested/index.html'),
            }
        }
    },
    server: {
        port,
    }
});
