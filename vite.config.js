import path from "path";
import { defineConfig, loadEnv } from "vite";
import "dotenv/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: path.resolve(__dirname, "."),
    base: "/Jocie-Portfolio/",
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/main.js"),
          index: path.resolve(__dirname, "index.html"),
          education: path.resolve(__dirname, "src/education.html"),
          contact: path.resolve(__dirname, "src/contact.html"),
          artwork: path.resolve(__dirname, "src/artwork.html"),
        },
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
