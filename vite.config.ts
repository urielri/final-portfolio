import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components/": "components/",
      "pages/": "components/pages/",
      "utils/": "components/utils/",
      "types/": "types/*",
      "styles/": "styles/*",
      "icons/": "icons/*",
      "state/": "state/*",
      "test/": "test/*",
    },
  },
  test: {
    environment: "jsdom",

    exclude: [
      "./test/components/utils/theme/*",
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
  },
});
