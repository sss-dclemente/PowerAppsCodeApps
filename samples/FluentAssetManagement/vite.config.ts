import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'fluentui-components': ['@fluentui/react-components'],
          'fluentui-icons': ['@fluentui/react-icons'],
          'power-apps': ['@pa-client/power-code-sdk']
        }
      }
    },
    // Increase chunk size warning limit to 1000kb (from default 500kb)
    chunkSizeWarningLimit: 1000
  }
});
