import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/meu-portifolio/' : '/', // Adiciona base só no build
  server: {
    open: true, // Isso vai fazer o navegador abrir automaticamente
  },
});
