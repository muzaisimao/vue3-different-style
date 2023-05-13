import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';

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
    // reactivityTransform is dropped.
    // vue({ reactivityTransform: true }),
    vue(),
    vueJsx({ }),
    ReactivityTransform(),
  ],
});
