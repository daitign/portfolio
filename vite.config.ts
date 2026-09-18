import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router", "@vueuse/core"],
          swiper: ["swiper"],
          fontawesome: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/vue-fontawesome",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-brands-svg-icons",
          ],
        },
      },
    },
  },
});
