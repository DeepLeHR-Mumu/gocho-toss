import { expect, test } from "@playwright/test";

import { BUSINESS_BACKEND_URL } from "shared-constant";
import { INTERNAL_URL } from "@/constants/url";

test("기업 정보 변경 페이지 테스트", async ({ page, context }) => {
  await page.goto(INTERNAL_URL.HOME);

  await Promise.all([page.waitForNavigation(), page.getByRole("link", { name: "기업 정보 수정" }).click()]);

  const companyResponse = await page.waitForResponse(
    (response) =>
      response.url().includes(`${BUSINESS_BACKEND_URL}/companies`) &&
      !response.url().includes("count-info") &&
      response.status() === 200 &&
      response.request().method() === "GET"
  );

  const alert = await page
    .waitForEvent("dialog", { timeout: 1000 })
    .then((alertResponse) => {
      alertResponse.accept();
      return alertResponse;
    })
    .catch(() => null);

  const companyDetailData = await companyResponse.json();
  expect(companyResponse.ok()).toBeTruthy();

  if (alert !== null) {
    // 검수중 alert 경고 확인
    expect(alert.type() === "alert");
    expect(alert.message()).toEqual("기업정보 수정요청이 대기중입니다. 관리자의 확인 전까지 잠시만 기다려주세요");
  }

  // 검수중 or 승인됨 상황 여부 비교
  if (companyDetailData.data.uploader.is_mine === false) {
    // 이미 타인이 수정 진행중 이므로 각 입력사항 disable 체크
    expect(await page.locator('input[name="employee_number"]').isDisabled()).toBeTruthy();
    expect(await page.locator('input[name="intro"]').isDisabled()).toBeTruthy();
    expect(await page.getByRole("button", { name: "주소찾기" }).isDisabled()).toBeTruthy();
    expect(await page.locator("#nozoTrue").isDisabled()).toBeTruthy();
    expect(await page.locator("#nozoFalse").isDisabled()).toBeTruthy();
    expect(await page.locator('input[name="nozo.desc"]').isDisabled()).toBeTruthy();
    expect(await page.locator('input[name="pay_start"]').isDisabled()).toBeTruthy();
    expect(await page.locator('input[name="pay_avg"]').isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(0).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(1).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(2).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(3).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(4).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(5).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(6).isDisabled()).toBeTruthy();
    expect(await page.getByTestId("company/edit/welfareForm").locator("input").nth(7).isDisabled()).toBeTruthy();
    expect(await page.getByRole("button", { name: "기업 정보 수정완료" }).nth(0).isDisabled()).toBeTruthy();
    expect(await page.getByRole("button", { name: "기업 정보 수정완료" }).nth(1).isDisabled()).toBeTruthy();
    return;
  }
  if (companyDetailData.data.uploader.is_mine) {
    // 수정한 내용이 하나도 없을 시 isDirty alert 경고 여부
    const isDirtyAlertPromise = page.waitForEvent("dialog");
    await page.getByRole("button", { name: "기업 정보 수정완료" }).nth(0).click();
    const isDirtyAlert = await isDirtyAlertPromise;
    await isDirtyAlert.accept();
    expect(isDirtyAlert.message()).toEqual("변경사항이 없습니다.");

    // 필수 입력값 벨리데이션 여부
    const ERROR_COLOR = "rgb(240, 61, 62)";
    const MAX_TEXT_LOREM =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    await page.locator('input[name="employee_number"]').fill("-1");
    await expect(page.locator('input[name="employee_number"]')).toHaveCSS("border-color", ERROR_COLOR);

    await page.locator('input[name="intro"]').fill(MAX_TEXT_LOREM);
    await page.getByText("최대 글자수에 도달하였습니다").isVisible();
    await page.locator('input[name="intro"]').clear();

    await page.locator('input[name="nozo.desc"]').fill(MAX_TEXT_LOREM);
    await expect(page.locator('input[name="nozo.desc"]')).toHaveCSS("border-color", ERROR_COLOR);
    await page.getByText("최대 글자수에 도달하였습니다").isVisible();
    await page.locator('input[name="nozo.desc"]').clear();

    await page.locator('input[name="pay_start"]').clear();
    await page.locator('input[name="pay_start"]').fill("999");

    const [payStartAlert] = await Promise.all([
      page.waitForEvent("dialog").then((res) => {
        res.accept();
        return res;
      }),
      page.keyboard.press("Tab"),
    ]);

    // 연봉기준 alert 경고 확인
    expect(payStartAlert.type() === "alert");
    expect(payStartAlert.message()).toEqual("월급이 아닌 연봉 기준입니다. 입력하신 정보가 맞나요?");
    await expect(page.locator('input[name="pay_start"]')).toHaveCSS("border-color", ERROR_COLOR);

    await page.locator('input[name="pay_desc"]').fill(MAX_TEXT_LOREM);
    await expect(page.locator('input[name="pay_desc"]')).toHaveCSS("border-color", ERROR_COLOR);
    await page.getByText("최대 글자수에 도달하였습니다").isVisible();

    // post 정상 작동 여부
    await page.locator('input[name="employee_number"]').fill("182");
    await page.locator('input[name="intro"]').fill("테스트 기업소개 글입니다.");

    const kakaoAddressPagePromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "주소찾기" }).click();
    const kakaoAddressPage = await kakaoAddressPagePromise;
    await kakaoAddressPage.waitForLoadState();
    await kakaoAddressPage.keyboard.type("서울", { delay: 500 });
    await kakaoAddressPage.keyboard.press("Enter", { delay: 1000 });
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Tab");
    await kakaoAddressPage.keyboard.press("Enter");

    await page.getByTestId("company/edit/BasicPart").getByText("없음").click();
    await page.locator('input[name="pay_start"]').clear();
    await page.locator('input[name="pay_start"]').fill("2000");
    await page.locator('input[name="pay_avg"]').clear();
    await page.locator('input[name="pay_avg"]').fill("2100");
    await page.locator('input[name="pay_desc"]').fill("기타 연봉 테스트정보입니다.");
    await page.getByTestId("company/edit/welfareForm").locator("input").nth(1).fill("의료 복지정보 테스트");
    await page.keyboard.press("Enter");

    const [submitRequest] = await Promise.all([
      page.waitForResponse((res) => res.url().includes("companies") && res.request().method() === "PUT"),
      page.getByRole("button", { name: "기업 정보 수정완료" }).nth(1).click(),
      page.on("dialog", (dialog) => dialog.accept()),
    ]);

    expect(submitRequest.ok()).toBeTruthy();
  }
});
