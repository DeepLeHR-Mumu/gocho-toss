import { expect, test } from "@playwright/test";

import { INTERNAL_URL } from "@/constants/url";

test.beforeEach(async ({ page }) => {
  await page.goto(INTERNAL_URL.LOGIN);
  await page.getByPlaceholder("아이디(이메일)").fill("ahri@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.waitForNavigation();
});

test("공장 정보 등록 및 삭제 테스트", async ({ page }) => {
  const beforeFactoryPromise = page.waitForResponse(
    (response) => response.url().includes("factories") && response.status() === 200
  );
  await page.getByRole("link", { name: "공장" }).click();

  const popupPromise = page.waitForEvent("popup");

  const beforeFactoryListDataObj = await (await beforeFactoryPromise).json();

  await expect(page.getByRole("heading", { name: "공장 등록" })).toHaveText("공장 등록");
  await expect(page.getByRole("heading", { name: "공장 목록" })).toHaveText("공장 목록");

  await page.getByRole("link", { name: "공장" }).click();

  await page.locator("input[name='factory_name']").type("테스트 공장 1", { delay: 100 });

  await page.getByRole("button", { name: "주소찾기" }).click();
  await page.waitForLoadState("networkidle");
  const popup = await popupPromise;

  await page.waitForTimeout(1000);
  await popup.keyboard.type("서울", { delay: 20 });
  await popup.keyboard.press("Enter");

  await page.waitForTimeout(1000);
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

  await page.getByText("있음").first().click();
  await page.getByText("있음").nth(1).click();
  await page.waitForTimeout(100);

  page.on("dialog", (dialog) => dialog.accept());

  const [afterPostResponse] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("factories") && res.request().method() === "GET"),
    page.getByRole("button", { name: "공장 등록" }).click(),
  ]);

  const afterFactoryListDataObj = await afterPostResponse.json();

  expect(beforeFactoryListDataObj.count + 1).toBe(afterFactoryListDataObj.count);

  await expect(page.getByTestId("factory/list/factoryCardListPart")).toHaveCount(afterFactoryListDataObj.count);

  await page.getByRole("button", { name: "공장수정" }).first().click();
  await expect(
    page.getByTestId("factory/list/factoryCardListPart").locator("div").filter({ hasText: "수정중" }).first()
  ).toBeVisible();

  await page.locator("input[name='factory_name']").fill("바뀐공장이름");
  const anotherPopupPromise = page.waitForEvent("popup");

  await page.getByRole("button", { name: "주소찾기" }).click();
  const secondPopup = await anotherPopupPromise;
  await page.waitForTimeout(500);

  await secondPopup.keyboard.insertText("부산");
  await secondPopup.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Tab");
  await secondPopup.keyboard.press("Enter");
  await page.waitForTimeout(500);

  await page.locator("input[name='product']").fill("바뀐생산품");
  await page.locator("input[name='male_number']").fill("99");
  await page.locator("input[name='female_number']").fill("99");

  await page.getByText("없음").first().click();
  await page.getByText("없음").nth(1).click();
  await page.locator('input[name="dormitory_etc"]').fill("새로운 dormitory");
  await page.locator('input[name="bus_etc"]').fill("새로운 버스");

  await page.getByRole("button", { name: "공장 수정" }).click();

  await expect(page.getByTestId("factory/list/factoryCardListPart").nth(1).getByText("바뀐공장이름")).toBeVisible();
  await expect(page.getByTestId("factory/list/factoryCardListPart").nth(1).getByText("새로운 dormitory")).toBeVisible();
  await expect(page.getByTestId("factory/list/factoryCardListPart").nth(1).getByText("새로운 버스")).toBeVisible();

  const beforeDeleteCardCount = await page.getByTestId("factory/list/factoryCardListPart").count();
  await page.getByTestId("factory/list/factoryCardListPart").nth(1).getByRole("button", { name: "공장삭제" }).click();

  const afterDeleteCardCount = await page.getByTestId("factory/list/factoryCardListPart").count();
  expect(beforeDeleteCardCount - 1).toBe(afterDeleteCardCount);
  expect(beforeDeleteCardCount - 1).toBe(afterDeleteCardCount);
});
