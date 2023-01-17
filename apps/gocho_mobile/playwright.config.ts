import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30000,
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  // workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? "github" : "list",

  projects: [
    {
      name: "Mobile Chrome",
      testDir: "./e2e",
      use: {
        baseURL: process.env.GOCHO_MOBILE_URL || "http://localhost:3000",
        ...devices["Galaxy S9+"],
      },
    },
  ],
};

export default config;
