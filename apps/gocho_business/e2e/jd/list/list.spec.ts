import { test, expect, Page, APIRequestContext, Response } from "@playwright/test";

import { businessLinkObj } from "shared-constant/e2e/internalURL";

test.beforeEach(async ({ page }) => {
  await page.goto(businessLinkObj.JD_LIST);
});

test.describe("공고 리스트 테스트", () => {
  test("공고 등록하기 버튼 테스트", async ({ page }) => {
    await page.getByText("공고 등록").click();
    expect(page.url().includes("jd/upload"));
  });

  test("타이틀, heading 검사", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("고초대졸.business");
  });
});
