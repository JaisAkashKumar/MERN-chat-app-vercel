import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://akash-chat-app.vercel.app/",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the build
  },
});
