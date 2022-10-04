import { test, expect } from "@playwright/test";
import { linkObj } from "../../../constant/internalURL";

test.beforeEach(async ({ page, request, baseURL }) => {
  await page.goto(linkObj.JOBS_LIST_URL);
});

test.describe("공고 리스트 페이지 테스트", () => {
  test("공고 광고 리스트 테스트", async ({ page }) => {
    await page.locator("_react=JobAdCardList").locator("button").click();
  });

  // test("공고 리스트 테스트", async ({ page }) => {});
  //
  // test("필터 테스트", async ({ page }) => {});
  //
  // test("검색 테스트", async ({ page }) => {});
});
