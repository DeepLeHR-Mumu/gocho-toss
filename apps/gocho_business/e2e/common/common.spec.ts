import { expect, Page } from "@playwright/test";

import { businessTestUserInfo } from "shared-constant/e2e/mockAuth";

export const loginTester = async (page: Page) => {
  await page.locator('input[name="email"]').fill(businessTestUserInfo.USER_EMAIL);
  await page.locator('input[name="password"]').fill(businessTestUserInfo.USER_PASSWORD);

  const [Response] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("auth/login") && response.status() === 200),
    await page.getByRole("button", { name: "로그인" }).click(),
  ]);
  expect(Response.ok()).toBeTruthy();
};
