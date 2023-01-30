import { test, expect } from "@playwright/test";
import { INTERNAL_URL } from "@/constants/url";

test("공고 리스트 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.JD_LIST);

  const [jdListResponse] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("/jds") && response.status() === 200),
  ]);

  await expect(page.locator("h2")).toHaveText("등록된 공고 목록");

  const jdListData = await jdListResponse.json();
  await expect(page.getByTestId("jd/list/listPart").locator(">div")).toHaveCount(jdListData.count + 1);

  await page.getByTestId("jd/list/listPart").getByText("공고 등록").click();
  expect(page.url().includes("jd/upload"));
});
