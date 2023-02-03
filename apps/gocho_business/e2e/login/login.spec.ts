import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants/url";

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
  await page.goto(INTERNAL_URL.HOME);
});

test("로그인 체크 및 로그인 이후 로그인페이지 블로킹", async ({ page }) => {
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.getByPlaceholder("아이디(이메일)").fill("yuyukgh@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");

  const [loginResponse] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("/auth/login") && response.status() === 200),
    page.waitForNavigation(),
    await page.getByRole("button", { name: "로그인" }).click(),
  ]);
  expect(loginResponse.ok()).toBeTruthy();
  await expect(page).toHaveURL(INTERNAL_URL.JD_LIST);
});

test("정보가 틀렸을 때", async ({ page }) => {
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByPlaceholder("아이디(이메일)").fill("");
  await page.getByPlaceholder("아이디(이메일)").blur();
  await expect(page.getByText("이메일을 입력해주세요.")).toBeVisible();

  await page.getByPlaceholder("아이디(이메일)").fill("yuyukgh@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("");
  await page.getByPlaceholder("비밀번호").blur();
  await expect(page.getByText("비밀번호를 입력해주세요.")).toBeVisible();

  await page.getByPlaceholder("아이디(이메일)").fill("noId@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("1234");
  await page.getByRole("button", { name: "로그인" }).click();
  await expect(page.getByText("해당 유저가 존재하지 않습니다.")).toBeVisible();
});

test("로그인 안한 상태에서 타 페이지 접속시 블로킹", async ({ page }) => {
  await page.goto(INTERNAL_URL.JD_LIST);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.JD_UPLOAD);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.FACTORY_LIST);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.COMPANY_EDIT);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.HELP);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.HOME);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
  await page.goto(INTERNAL_URL.RECRUITER_LIST);
  await expect(page).toHaveURL(INTERNAL_URL.LOGIN);
});
