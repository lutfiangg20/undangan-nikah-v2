import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/undangan-nikah-v2",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
