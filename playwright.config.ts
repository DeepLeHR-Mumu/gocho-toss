import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 6000,
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",

  projects: [
    // gocho_web
    {
      name: "chromium",
      testDir: "./e2e/gocho_web",
      use: {
        baseURL: process.env.GOCHO_WEB_URL || "http://localhost:3000",
        ...devices["Desktop Chrome"],
      },
    },

    // {
    //   name: "webkit",
    //   testDir: "./e2e/gocho_web",
    //   use: {
    //     baseURL: process.env.GOCHO_WEB_URL || "http://localhost:3000",
    //     ...devices["Desktop Safari"],
    //   },
    // },

    /* gocho_mobile */
    {
      name: "Mobile Chrome",
      testDir: "./e2e/gocho_mobile",
      use: {
        baseURL: process.env.GOCHO_MOBILE_URL || "http://localhost:3000",
        ...devices["Galaxy S9+"],
      },
    },
    // {
    //   name: "Mobile Safari",
    //   testDir: "./e2e/gocho_mobile",
    //   use: {
    //     baseURL: process.env.GOCHO_MOBILE_URL || "http://localhost:3000",
    //     ...devices["iPhone 12"],
    //   },
    // },

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
