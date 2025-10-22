import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-10/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        timer: 'src/pages/timer/timer.html',
        snackbar: 'src/pages/snackbar/snackbar.html'
      }
    }
  }
});
