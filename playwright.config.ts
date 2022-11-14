import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  timeout: 5000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    actionTimeout: 0,
    // baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    // trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      testDir: "./e2e/gocho_web",
      use: {
        baseURL: process.env.GOCHO_WEB_URL || "http://localhost:3000",
        ...devices["Desktop Chrome"],
      },
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },

    {
      name: "webkit",
      testDir: "./e2e/gocho_web",
      use: {
        baseURL: process.env.GOCHO_WEB_URL || "http://localhost:3000",
        ...devices["Desktop Safari"],
      },
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      testDir: "./e2e/gocho_mobile",
      use: {
        baseURL: process.env.GOCHO_MOBILE_URL || "http://localhost:3000",
        ...devices["Galaxy S9+"],
      },
    },
    {
      name: "Mobile Safari",
      testDir: "./e2e/gocho_mobile",
      use: {
        baseURL: process.env.GOCHO_MOBILE_URL || "http://localhost:3000",
        ...devices["iPhone 12"],
      },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
};

export default config;
