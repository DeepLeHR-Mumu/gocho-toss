import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants";

test.beforeEach(async ({ page }) => {
  await page.goto(INTERNAL_URL.LOGIN);
  await page.getByPlaceholder("아이디(이메일)").fill("ahri@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.waitForLoadState("networkidle");
});

test("타이틀, heading 검사", async ({ page }) => {
  await page.getByRole("link", { name: "공장" }).click();
  await expect(page.getByText("고초대졸.business")).toBeVisible();
  await expect(page.getByRole("heading", { name: "공장 등록" })).toHaveText("공장 등록");
  await expect(page.getByRole("heading", { name: "공장 목록" })).toHaveText("공장 목록");
});

test("공장목록 정상출력 확인", async ({ page }) => {
  await page.getByRole("link", { name: "공장" }).click();
  const factoryListData = await page.waitForResponse(
    (response) => response.url().includes("factories") && response.status() === 200
  );
  const factoryListDataObj = await factoryListData.json();
  await expect(page.getByTestId("factory/list/factoryCardListPart")).toHaveCount(factoryListDataObj.count);
});

test("공장 정보 등록 검사", async ({ page }) => {
  await page.getByRole("link", { name: "공장" }).click();
  const beforeFactoryListDataObj = await (
    await page.waitForResponse((response) => response.url().includes("factories") && response.status() === 200)
  ).json();
  await page.waitForLoadState("networkidle");

  await page.locator("input[name='factory_name']").type("테스트 공장 1");

  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "주소찾기" }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState("networkidle");
  await popup.keyboard.insertText("서울");
  await popup.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Tab");
  await popup.keyboard.press("Enter");
  await page.waitForTimeout(500);

  await page.locator("input[name='product']").fill("생산품 입니다 생산품이요 생산품");
  await page.locator("input[name='male_number']").fill("33");
  await page.locator("input[name='female_number']").fill("55");

  await page.locator("#busTrue").click();
  await page.locator("#dormitoryTrue").click();
  await page.waitForTimeout(500);

  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "공장 등록" }).click();

  const aftrerFactoryListDataObj = await (
    await page.waitForResponse((response) => response.url().includes("factories") && response.status() === 200)
  ).json();

  expect(beforeFactoryListDataObj.count + 1).toBe(aftrerFactoryListDataObj.count);

  await expect(page.getByTestId("factory/list/factoryCardListPart")).toHaveCount(aftrerFactoryListDataObj.count);
});

test("수정 시 h2 태그 수정 및 수정중 카드 확인", async ({ page }) => {
  await page.getByRole("link", { name: "공장" }).click();
  await page.getByRole("button", { name: "공장수정" }).first().click();
  await expect(page.getByRole("heading", { name: "공장 수정" })).toBeVisible();
  await expect(
    page.getByTestId("factory/list/factoryCardListPart").locator("div").filter({ hasText: "수정중" })
  ).toBeVisible();
});

test("수정 시 h2 태그 수정 및 수정중 카드 확인", async ({ page }) => {
  await page.getByRole("link", { name: "공장" }).click();
  await page.getByRole("button", { name: "공장수정" }).first().click();
  await expect(page.getByRole("heading", { name: "공장 수정" })).toBeVisible();
  await expect(
    page.getByTestId("factory/list/factoryCardListPart").locator("div").filter({ hasText: "수정중" })
  ).toBeVisible();
});
