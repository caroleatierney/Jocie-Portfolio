import path from "path";
import { defineConfig, loadEnv } from "vite";
import "dotenv/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: path.resolve(__dirname, "."),
    base: "/Jocie-Portfolio/",
    build: {
      outDir: "../Jocie-Portfolio/dist",
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "../src/main.js"),
      },
    },
    server: {
      port: 8080,
      hot: true,
    },
    define: {
      "process.env": env,
    },
  };
});
