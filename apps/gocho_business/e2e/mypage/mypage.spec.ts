import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants";

import { EDIT_PASSWORD_MESSAGE } from "./constants";

test("잘못된 정보 입력시 에러 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.HOME);
  await page.getByRole("link", { name: "회원정보" }).click();
  await page.getByPlaceholder("현재 비밀번호를 입력해주세요").fill("12345678");
  await page.getByPlaceholder("8~20자, 띄어쓰기 불가능").fill("deeple123");
  await page.getByPlaceholder("새 비밀번호와 동일하게 작성해주세요").fill("deeple123");
  await page.getByRole("button", { name: "회원정보 변경 저장" }).click();
  await expect(page.getByText(EDIT_PASSWORD_MESSAGE.ORIGIN_VALIDATE)).toBeVisible();

  await page.getByPlaceholder("현재 비밀번호를 입력해주세요").fill("   ");
  await expect(page.getByText(EDIT_PASSWORD_MESSAGE.PATTERN)).toBeVisible();
  await page
    .getByPlaceholder("현재 비밀번호를 입력해주세요")
    .fill("엄청나게긴20자이상비밀번호테스트입니다많이길어질수있습니다그렇습니다이것은단지테스트입니다");
  await expect(page.getByText(EDIT_PASSWORD_MESSAGE.PATTERN)).toBeVisible();
  await page.getByPlaceholder("현재 비밀번호를 입력해주세요").fill("123");
  await expect(page.getByText(EDIT_PASSWORD_MESSAGE.PATTERN)).toBeVisible();
  await page.getByPlaceholder("현재 비밀번호를 입력해주세요").fill("noPassword");
  await page.getByPlaceholder("8~20자, 띄어쓰기 불가능").fill("deeple12443");
  await page.getByPlaceholder("새 비밀번호와 동일하게 작성해주세요").fill("dee22ple123");
  await expect(page.getByText(EDIT_PASSWORD_MESSAGE.VALIDATE)).toBeVisible();
});
