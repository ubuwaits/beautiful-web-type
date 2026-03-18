import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "on-first-retry"
  },
  webServer: {
    command: "pnpm exec next dev --port 3100",
    reuseExistingServer: false,
    timeout: 120000,
    url: "http://127.0.0.1:3100"
  }
});
