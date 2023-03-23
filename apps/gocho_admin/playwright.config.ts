import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30000,
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  globalSetup: require.resolve("./e2e/global-setup"),
  use: { storageState: "storageState.json" },
  projects: [
    {
      name: "chromium",
      testDir: "./e2e",

      use: {
        baseURL: process.env.GOCHO_ADMIN_URL || "http://localhost:3000",
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
