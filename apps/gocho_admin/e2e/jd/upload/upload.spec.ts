import { expect, test } from "@playwright/test";

import { MANAGER_BACKEND_URL } from "shared-constant/src";
import { INTERNAL_URL } from "@/constant";

test("공고 업로드 테스트", async ({ page }) => {
  test.slow();

  await page.route(`${MANAGER_BACKEND_URL}/jds`, (route) => {
    route.fulfill({
      headers: { "Content-Type": "multipart/form-data" },
      status: 200,
      body: JSON.stringify({}),
    });
  });

  await page.goto(INTERNAL_URL.JD_UPLOAD_URL);
  expect(page.locator("h2")).toHaveText("공고 업로드");
  await page.getByPlaceholder("기업이름을 작성해주세요").fill("sk하이닉스");
  await page.getByRole("button", { name: "검색" }).click();
  await page.waitForTimeout(100);
  await page.locator("label").filter({ hasText: "SK하이닉스" }).first().check({ force: true });
  await page.getByPlaceholder("공고제목을 작성해주세요").fill("테스트용 공고 제목입니다.");
  await page.locator('input[name="start_time"]').fill(new Date().toISOString().substring(0, 16));
  await page.locator("label").filter({ hasText: "상시공고" }).check();
  await page.locator('textarea[name="process_arr"]').fill("채용절차 1단계\n채용절차 2단계");
  await page.getByPlaceholder("https://").fill("https://naver.com");
  await page.locator('textarea[name="apply_route_arr"]').fill("지원방법 1단계\n지원방법 2단계");
  await page.locator('textarea[name="etc_arr"]').fill("기타사항 1단계\n기타사항 2단계");
  await page.locator("label").filter({ hasText: "중졸" }).first().check();
  await page.locator("label").filter({ hasText: "고졸" }).first().check();
  await page.locator('textarea[name="position_arr\\.0\\.required_etc_arr"]').fill("기타조건 1단계\n기타조건 2단계");
  await page.locator("label").filter({ hasText: "경력" }).first().click();
  await page.getByLabel("년 이상").fill("2");
  await page.getByLabel("년 이하").fill("10");
  await page.locator("label").filter({ hasText: "계약>정규" }).check();
  await page.getByLabel("%").fill("45");
  await page.locator("label").filter({ hasText: "5조 3교대" }).check();
  await page.locator("label").filter({ hasText: "공무" }).check();
  await page.locator("label").filter({ hasText: "생산설비" }).check();
  await page.locator('textarea[name="position_arr\\.0\\.task_detail_arr"]').fill("세부직무 1단계\n세부직무 2단계");
  await page.selectOption('[name="position_arr.0.place.type"]', "일반");
  await page.getByRole("button", { name: "충북 4공장" }).click();
  await page.getByRole("button", { name: "00명 채용" }).first().click();
  await page.locator('input[name="certiSearchWord"]').fill("건설안전");
  await page.getByRole("button", { name: "건설안전" }).click();
  await page.locator('textarea[name="position_arr\\.0\\.pay_arr"]').fill("급여 1단계\n급여 2단계");
  await page.locator('textarea[name="position_arr\\.0\\.preferred_etc_arr"]').fill("기타우대 1단계\n기타우대 2단계");

  const [submitRequest] = await Promise.all([
    page.waitForResponse(`${MANAGER_BACKEND_URL}/jds`),
    await page.getByRole("button", { name: "공고 등록하기" }).click(),
  ]);
  expect(submitRequest.ok()).toBeTruthy();
  await page.close();
});
