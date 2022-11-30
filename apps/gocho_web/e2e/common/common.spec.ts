import { test, expect, Page } from "@playwright/test";

import { testUserInfo } from "shared-constant/e2e/mockAuth";

export const loginTester = async (page: Page) => {
  await page.getByRole("button", { name: "로그인 / 회원가입" }).click();
  await page.locator('input[name="email"]').fill(testUserInfo.USER_EMAIL);
  await page.locator('input[name="password"]').fill(testUserInfo.USER_PASSWORD);

  const [response] = await Promise.all([
    page.waitForResponse((response) => {
      return response.url().includes("auth/login") && response.status() === 200;
    }),
    await page.getByRole("button", { name: "로그인 하기" }).click(),
  ]);
  expect(response.ok()).toBeTruthy();
};