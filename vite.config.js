import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const currentPath = new URL('./src', import.meta.url);

export default defineConfig({
  resolve: {
    alias: { '@': currentPath.pathname },
  },
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx({ }),
  ],
});
