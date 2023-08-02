import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants";

test("기업 계정 목록 갯수 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.MANAGER_LIST);
  const managerDataObj = await (
    await page.waitForResponse((response) => response.url().includes("managers") && response.status() === 200)
  ).json();
  const count = await page.locator("li").count();
  expect(count).toBe(managerDataObj.count);
});
