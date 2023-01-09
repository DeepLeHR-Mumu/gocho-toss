import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 15000,
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  workers: process.env.CI ? 4 : undefined,
  projects: [
    {
      name: "chromium",
      testDir: "./e2e",
      use: {
        baseURL: process.env.GOCHO_BUSINESS_URL || "http://localhost:3000",
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
