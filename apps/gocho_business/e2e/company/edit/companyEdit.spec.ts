import { expect, test } from "@playwright/test";

import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";
import { INTERNAL_URL } from "@/constants/url";

test.beforeEach(async ({ page }) => {
  await page.goto(INTERNAL_URL.LOGIN);
  await page.getByPlaceholder("아이디(이메일)").fill("vi@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.waitForLoadState("networkidle");
});

test("기업 정보 get 및 expect 테스트", async ({ page, request }) => {
  const myCompanyId = 968;
  const [companyResponse] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("companies") && response.status() === 200),
    page.waitForNavigation(),
    await page.getByRole("link", { name: "기업 정보 수정" }).click(),
  ]);
  const companyData = await companyResponse.json();

  const companyRequestResponse = await request.get(`${BUSINESS_BACKEND_URL}/companies/${myCompanyId}`);
  const companyRequestData = await companyRequestResponse.json();

  expect(companyData.data.size).toEqual(companyRequestData.data.size);
  expect(companyData.data.employee_number).toEqual(companyRequestData.data.employee_number);
  expect(companyData.data.found_date).toEqual(companyRequestData.data.found_date);
  expect(companyData.data.business_number).toEqual(companyRequestData.data.business_number);
  expect(companyData.data.address).toEqual(companyRequestData.data.address);
  expect(companyData.data.intro).toEqual(companyRequestData.data.intro);
  expect(companyData.data.pay_avg).toEqual(companyRequestData.data.pay_avg);
  expect(companyData.data.pay_start).toEqual(companyRequestData.data.pay_start);
  expect(companyData.data.pay_desc).toEqual(companyRequestData.data.pay_desc);
  expect(companyData.data.nozo.exists).toEqual(companyRequestData.data.nozo.exists);
  expect(companyData.data.nozo.desc).toEqual(companyRequestData.data.nozo.desc);
  expect(companyData.data.welfare.money).toEqual(companyRequestData.data.welfare.money);
  expect(companyData.data.welfare.health).toEqual(companyRequestData.data.welfare.health);
  expect(companyData.data.welfare.life).toEqual(companyRequestData.data.welfare.life);
  expect(companyData.data.welfare.holiday).toEqual(companyRequestData.data.welfare.holiday);
  expect(companyData.data.welfare.facility).toEqual(companyRequestData.data.welfare.facility);
  expect(companyData.data.welfare.vacation).toEqual(companyRequestData.data.welfare.vacation);
  expect(companyData.data.welfare.growth).toEqual(companyRequestData.data.welfare.growth);
  expect(companyData.data.welfare.etc).toEqual(companyRequestData.data.welfare.etc);
});

test("기업 정보 수정 테스트", async ({ page }) => {
  await page.getByRole("link", { name: "기업 정보 수정" }).click();
  await page.locator('input[name="employee_number"]').fill("55");
  await page.locator('input[name="intro"]').fill("가짜 회사소개입니다");

  const popupPromise = page.waitForEvent("popup");

  await page.getByRole("button", { name: "주소찾기" }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState("networkidle");
  await popup.keyboard.insertText("서울");
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

  await page.locator('input[name="pay_start"]').fill("1000");
  await page.locator('input[name="pay_avg"]').fill("1000");
  await page.locator('strong:has-text("급여") ~ div > input').fill("급여 복지를 추가하자");
  await page.locator('strong:has-text("급여") ~ div > input ~ button').click();
  await page.locator('strong:has-text("의료") ~ div > input').fill("의료 복지를 추가하자");
  await page.locator('strong:has-text("의료") ~ div > input ~ button').click();
  await page.locator('strong:has-text("생활") ~ div > input').fill("생활 복지를 추가하자");
  await page.locator('strong:has-text("생활") ~ div > input ~ button').click();
  await page.locator('button[aria-label="의료 복지를 추가하자 제거하기"]').click();

  const [companyRequest] = await Promise.all([
    page.waitForRequest((putRequest) => putRequest.url().includes("companies")),
    page.on("dialog", (dialog) => dialog.accept()),
    await page.getByRole("button", { name: "기업 정보 수정완료" }).nth(1).click(),
  ]);

  expect(companyRequest).toBeTruthy();
});
