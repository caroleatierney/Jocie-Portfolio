const path = require("path");
import { defineConfig, loadEnv } from "vite";
import "dotenv/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: path.resolve(__dirname, "src"),
    build: {
      outDir: "../dist",
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