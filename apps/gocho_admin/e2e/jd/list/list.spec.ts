import { test, expect } from "@playwright/test";
import { INTERNAL_URL } from "@/constant";

test("공고 리스트 테스트", async ({ page }) => {
  await page.goto(`${INTERNAL_URL.JD_LIST_URL}?page=1`);

  const [jdListResponse] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("/jds") && response.status() === 200),
  ]);
  expect(jdListResponse.ok()).toBeTruthy();
  await expect(page.locator("h2")).toHaveText("공고 목록");

  await page.getByTestId("jd/list/jobCard").nth(0).getByRole("link", { name: "수정" }).nth(0).click();
  expect(page.url().includes("jd/edit"));
});
