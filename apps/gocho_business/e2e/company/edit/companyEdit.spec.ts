import { test } from "@playwright/test";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { INTERNAL_URL } from "@/constants/url";

test("내가 수정이 가능한 상황인지 아닌지 테스트", async ({ page }) => {
  await page.goto(INTERNAL_URL.HOME);

  const [companyResponse] = await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes(`${BUSINESS_BACKEND_URL}/companies`) &&
        !response.url().includes("count-info") &&
        response.status() === 200 &&
        response.request().method() === "GET"
    ),
    await page.getByRole("link", { name: "기업 정보 수정" }).click(),
  ]);

  // const alertPromise = page.waitForEvent("dialog");
  // const alert = await alertPromise;
  const companyDetailData = await companyResponse.json();

  if (companyDetailData.data.uploader.is_mine === false) {
    await page.locator('input[name="pay_start"]').isDisabled();
    // expect(alert.message()).toEqual("sss");
    // disabled 상황에서의 테스트코드
    return;
  }
  if (companyDetailData.data.uploader.is_mine) {
    await page.locator('input[name="pay_start"]').fill("2000");
    // 기업정보 수정 가능한 상황에서의 테스트코드
  }
});
