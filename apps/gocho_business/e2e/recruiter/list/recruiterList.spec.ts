import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants/url";

test("기업 계정 목록 갯수 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.RECRUITER_LIST);
  const recruiterDataObj = await (
    await page.waitForResponse((response) => response.url().includes("managers") && response.status() === 200)
  ).json();
  const count = (await page.locator("li").count()) / 2;
  expect(count).toBe(recruiterDataObj.count);
});
