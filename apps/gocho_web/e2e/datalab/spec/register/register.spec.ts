import { test, expect, Page, APIRequestContext, Response } from "@playwright/test";

import { linkObj } from "shared-constant/e2e/internalURL";
import { BACKEND_URL } from "shared-constant/e2e/externalURL";
import { loginTester } from "../../../common/common.spec";

test.beforeEach(async ({ page }) => {
  await page.goto(linkObj.SPEC_LIST_URL);
});

const basicSpecRegisterTester = async (page: Page) => {
  // part1Basic
  const [userCheckResponse] = await Promise.all([
    page.waitForResponse((response) => response.url().includes("/auth/detokenize") && response.status() === 200),
    page.waitForNavigation(),
    await page.getByRole("link", { name: "스펙 등록하기" }).click(),
  ]);
  const userData = await userCheckResponse.json();
  await expect(page.locator(`strong:has-text("${userData.data.nickname}")`)).toBeVisible();
  // basic 경고창 확인
  await page.getByRole("button", { name: "다음" }).click();
  await expect(page.locator('p:has-text("나이를 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("성별을 선택해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("병역사항을 선택해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("하나 이상의 직무를 선택해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("하나 이상의 업종을 선택해주세요.")')).toBeVisible();

  // basic 파트
  await page.locator('label[for="secret"]').click();
  await page.getByPlaceholder("나이를 숫자로만 적어주세요 예시: 32").fill("999");
  await expect(page.locator('p:has-text("최대 나이는 99세 입니다.")')).toBeVisible();
  await page.getByPlaceholder("나이를 숫자로만 적어주세요 예시: 32").fill("20");
  await page.locator('label[for="남0"]').click();
  await page.locator('label[for="여1"]').click();
  await page.locator('label[for="군필0"]').click();
  await page.locator('label[for="미필1"]').click();
  await page.locator('label[for="면제-해당없음2"]').click();
  await page.locator('label[for="설비2"]').click();
  await page.locator('label[for="생산0"]').click();
  await page.locator('label[for="전자재료3"]').click();
  await page.locator('label[for="탱크터미널9"]').click();
  await page.getByRole("button", { name: "다음" }).click();

  // lastEducation 경고창 확인
  await page.getByRole("button", { name: "다음" }).click();
  await expect(page.locator('p:has-text("최종 학력을 선택해주세요.")')).toBeVisible();

  // lastEducation 파트
  await page.locator('label[for="highSchool"]').click();
  await page.getByRole("button", { name: "다음" }).click();
  await page.getByRole("button", { name: "이전" }).click();
  await page.locator('label[for="university"]').click();
  await page.getByRole("button", { name: "다음" }).click();

  // university 경고창 확인
  await page.getByRole("button", { name: "다음" }).click();
  await expect(page.locator('p:has-text("고등학교 정보를 선택해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("무단결석 일수를 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("무단지각 일수를 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("무단조퇴 일수를 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("무단결과 일수를 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("등급을 작성해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("전공계열을 작성해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("학점을 입력해주세요.")')).toBeVisible();
  await expect(page.locator('p:has-text("학점 최대점수를 입력해주세요.")')).toBeVisible();

  // university 파트
  await page.locator('label[for="공업고1"]').click();
  await page.locator('input[name="highschool.absent"]').fill("1");
  await page.locator('input[name="highschool.tardy"]').fill("1");
  await page.locator('input[name="highschool.leaveEarly"]').fill("1");
  await page.locator('input[name="highschool.classMiss"]').fill("1");
  await page.locator('input[name="highschool.naesin"]').fill("1");
  await page.locator('input[name="college.department"]').fill("테스트학과계열");
  await page.locator('button:has-text("평균학점 :학점/기준선택")').click();
  await page.locator('label[for="4.3"]').click();
  await page.locator('label[for="4.5"]').click();
  await page.locator('input[name="college.grade"]').fill("4.25");
  await page.locator('button:has-text("학점 추가하기")').click();
  await page.locator('label[for="uTurn"]').click();
  await page.getByRole("button", { name: "다음" }).click();

  // 자격증 파트
  await page.locator('label[for="isCertificate"]').click();
  await page.getByRole("button", { name: "키워드를 입력하면 관련 자격증이 검색됩니다" }).click();
  await page.getByPlaceholder("자격증 키워드를 검색해보세요.").fill("기능사");
  await page.getByRole("button", { name: "웹디자인기능사" }).click();
  await page.locator('button[aria-label="웹디자인기능사 제거"]').click();
  await page.getByRole("button", { name: "다음" }).click();
  await expect(page.locator('p:has-text("자격증을 선택해주세요")')).toBeVisible();
  await page.getByRole("button", { name: "키워드를 입력하면 관련 자격증이 검색됩니다" }).click();
  await page.getByPlaceholder("자격증 키워드를 검색해보세요.").fill("산업");
  await page.getByRole("button", { name: "포장산업기사" }).click();
  await page.getByRole("button", { name: "다음" }).click();
};

const specResponseCheckTester = async (isDeepRegister: boolean, response: Response, request: APIRequestContext) => {
  const registerPostData = await response.json();
  const registerId = await registerPostData.data["insertId"];

  const registerGetResponse = await request.get(`${BACKEND_URL}/specs/${registerId}`);
  const registerGetData = await registerGetResponse.json();

  expect(registerGetData.data.secret).toEqual(true);
  expect(registerGetData.data.gender).toEqual("여");
  expect(registerGetData.data.age).toEqual(20);
  expect(registerGetData.data.military).toEqual("면제-해당없음");
  expect(registerGetData.data.desired_task).toEqual(["생산", "설비"]);
  expect(registerGetData.data.desired_industry).toEqual(["전자재료", "탱크터미널"]);
  expect(registerGetData.data.last_education).toEqual("초대졸");
  expect(registerGetData.data.highschool.type).toEqual("공업고");
  expect(registerGetData.data.highschool.naesin).toEqual(1);
  expect(registerGetData.data.highschool.absent).toEqual(1);
  expect(registerGetData.data.highschool.tardy).toEqual(1);
  expect(registerGetData.data.highschool.leave_early).toEqual(1);
  expect(registerGetData.data.highschool.class_miss).toEqual(1);
  expect(registerGetData.data.college.department).toEqual("테스트학과계열");
  expect(registerGetData.data.college.grade).toEqual(4.25);
  expect(registerGetData.data.college.max_grade).toEqual(4.5);
  expect(registerGetData.data.college.uturn).toBeTruthy();
  expect(registerGetData.data.certificate.data).toEqual(["포장산업기사"]);

  // if (isDeepRegister) {
  //   expect(registerGetData.data.language).toEqual([{ language: "중국어", test: "TSC", score: "2급" }]);
  //   expect(registerGetData.data.award).toEqual("수상경력에 대한 서술...");
  //   expect(registerGetData.data.career).toEqual("경력에 대한 서술...");
  //   expect(registerGetData.data.etc).toEqual("기타사항에 대한 서술...");
  // }
};

test.describe("스펙등록 테스트", () => {
  test("타이틀, heading 검사", async ({ page }) => {
    await loginTester(page);
    await page.goto(linkObj.SPEC_REGISTER_URL);
    await expect(page).toHaveTitle("내 스펙 등록하기 - 고초대졸닷컴");
    await expect(page.locator("h1")).toHaveText("내 스펙 등록하기 - 고초대졸닷컴");
  });

  test("비로그인 접속시 모달 확인", async ({ page }) => {
    const [response] = await Promise.all([
      page.waitForResponse((response) => response.url().includes("/auth/detokenize") && response.status() === 401),
      page.goto(linkObj.SPEC_REGISTER_URL, {
        waitUntil: "load",
      }),
    ]);

    expect(response.ok()).toBeFalsy();
    await expect(page.locator('p:has-text("로그인이 필요한 서비스입니다.")')).toBeVisible();
  });

  test("스펙작성중 페이지 이탈시 블로킹 모달 확인", async ({ page }) => {
    test.slow();
    await loginTester(page);
    await basicSpecRegisterTester(page);
    await page.getByRole("link", { name: "채용공고" }).first().click();
    await expect(page.locator('strong:has-text("페이지를 나가시겠습니까?")')).toBeVisible();
    await expect(page.locator('p:has-text("작성 중인 스펙이 초기화됩니다. 나가시겠습니까?")')).toBeVisible();
    await page.locator('button:has-text("아니오")').click();
  });

  test("로그인 후 스펙 간단 등록 진행", async ({ page, request }) => {
    test.slow();
    await loginTester(page);
    await basicSpecRegisterTester(page);
    const registerResponse = await Promise.all([
      page.waitForResponse((response) => response.url().includes("/specs") && response.status() === 201),
      await page.locator('button:has-text("스펙 등록하기")').click(),
    ]);

    await specResponseCheckTester(false, registerResponse[0], request);
  });

  test("로그인 후 스펙 상세 등록 진행", async ({ page, request }) => {
    test.slow();
    await loginTester(page);
    await basicSpecRegisterTester(page);

    await page.getByRole("button", { name: "상세 스펙 추가" }).click();
    await page.getByRole("button", { name: "어학 추가하기" }).click();
    await page.getByRole("button", { name: "다음" }).click();
    await expect(page.locator('p:has-text("언어를 선택해주세요.")')).toBeVisible();
    await expect(page.locator('p:has-text("시험명을 선택해주세요.")')).toBeVisible();
    await expect(page.locator('p:has-text("점수를 작성해주세요.")')).toBeVisible();
    // 어학 파트 작성
    await page.getByRole("button", { name: "시험명" }).click();
    await expect(page.locator('p:has-text("언어를 먼저 선택해주세요")')).toBeVisible();
    await page.locator('button[aria-label="활성화된 선택창 닫기"]').click();
    await page.getByRole("button", { name: "언어" }).click();
    await page.locator('label[for="language.0.중국어"]').click();
    await page.getByRole("button", { name: "시험명" }).click();
    await page.locator('label[for="language.0.TSC"]').click();
    await page.locator('input[name="language.0.score"]').fill("2급");
    await page.locator('button[aria-label="어학 추가 제거"]').click();
    await page.getByRole("button", { name: "어학 추가하기" }).click();
    await page.getByRole("button", { name: "언어" }).click();
    await page.locator('label[for="language.0.중국어"]').click();
    await page.getByRole("button", { name: "시험명" }).click();
    await page.locator('label[for="language.0.TSC"]').click();
    await page.locator('input[name="language.0.score"]').fill("2급");
    await page.getByRole("button", { name: "다음" }).click();

    // 기타 작성 파트 작성
    await page.locator('textarea[name="award"]').fill("수상경력에 대한 서술...");
    await page.locator('textarea[name="career"]').fill("경력에 대한 서술...");
    await page.locator('textarea[name="etc"]').fill("기타사항에 대한 서술...");

    // 상세 스펙 등록 후 데이터 검수
    const registerResponse = await Promise.all([
      page.waitForResponse((response) => response.url().includes("/specs") && response.status() === 201),
      page.getByRole("button", { name: "완료" }).click(),
    ]);

    await specResponseCheckTester(true, registerResponse[0], request);

    await page.getByRole("link", { name: "스펙 리스트" }).click();
    await expect(page).toHaveURL(linkObj.SPEC_LIST_URL);
  });

  test("페이지 닫기", async ({ page }) => {
    await page.close();
  });
});
