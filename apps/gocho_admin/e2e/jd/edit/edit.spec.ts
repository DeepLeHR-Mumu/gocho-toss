import { expect, test } from "@playwright/test";

import { MANAGER_BACKEND_URL } from "shared-constant/src";
import { INTERNAL_URL } from "@/constant";

test("공고 수정 테스트", async ({ page }) => {
  test.slow();
  await page.goto(INTERNAL_URL.JD_LIST_URL);

  await page.route(`${MANAGER_BACKEND_URL}/jds`, (route) => {
    route.fulfill({
      headers: { "Content-Type": "multipart/form-data" },
      status: 200,
      body: JSON.stringify({}),
    });
  });

  await page.getByTestId("jd/list/jobCard").nth(0).getByRole("link", { name: "수정" }).nth(0).click();
  await page.waitForNavigation();
  await page.getByPlaceholder("기업이름을 작성해주세요").fill("고초");
  await page.getByRole("button", { name: "검색" }).click();
  await page.waitForTimeout(100);
  await page.locator("label").filter({ hasText: "고초대졸닷컴" }).first().check({ force: true });
  await page.getByPlaceholder("공고제목을 작성해주세요").fill("테스트용 공고 수정 제목입니다.");
  await page.locator("label").filter({ hasText: "이메일 링크" }).check();
  await page.getByPlaceholder("@").fill("gocho@test.com");
  await page.locator("label").filter({ hasText: "초대졸" }).first().check();
  await page.locator("label").filter({ hasText: "4년제" }).first().check();
  await page.locator("label").filter({ hasText: "신입" }).first().click();
  await page.locator("label").filter({ hasText: "정규직" }).check();
  await page.locator("label").filter({ hasText: "물류" }).click();
  await page.waitForTimeout(100);
  await page.locator("label").filter({ hasText: "자재" }).click();
  await page.selectOption('[name="position_arr.0.place.type"]', "일반");
  await page.getByRole("button", { name: "테스트 공장 1" }).nth(0).click();
  await page.getByRole("button", { name: "000명 채용" }).first().click();

  const [submitRequest] = await Promise.all([
    page.waitForResponse((res) => res.url().includes(`${MANAGER_BACKEND_URL}/jds`) && res.request().method() === "PUT"),
    page.getByRole("button", { name: "공고 수정하기" }).click(),
  ]);
  expect(submitRequest.ok()).toBeTruthy();
  await page.close();
});
