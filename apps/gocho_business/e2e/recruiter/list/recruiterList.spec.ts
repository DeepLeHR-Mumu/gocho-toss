import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants/url";

// test.beforeEach(async ({ page }) => {
//   await page.goto(INTERNAL_URL.LOGIN);
//   await page.getByPlaceholder("아이디(이메일)").fill("ahri@deeplehr.com");
//   await page.getByPlaceholder("비밀번호").fill("deeple1!");
//   await page.getByRole("button", { name: "로그인" }).click();
//   await page.waitForNavigation();
// });

test("기업 계정 목록 갯수 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.RECRUITER_LIST);
  const recruiterDataObj = await (
    await page.waitForResponse((response) => response.url().includes("manager") && response.status() === 200)
  ).json();
  const count = (await page.locator("li > p").count()) / 2;
  expect(count).toBe(recruiterDataObj.count);
});
