import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants/url";

test.beforeEach(async ({ page }) => {
  await page.goto(INTERNAL_URL.HOME);
});

test("체크", async ({ page }) => {
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.getByPlaceholder("아이디(이메일)").fill("vi@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByRole("button", { name: "로그인" }).click();
});
