import { test, expect } from "@playwright/test";
import { linkObj } from "../constant/internalURL";

test.beforeEach(async ({ page, request, baseURL }) => {
  await page.goto(linkObj.baseUrl);

  // login test
  const USER_EMAIL = "myTestId@deeplehr.com";
  const USER_PASSWORD = "12341234";

  await page.locator("text=로그인").click();
  await page.locator('input[name="email"]').fill(USER_EMAIL);
  await page.locator('input[name="password"]').fill(USER_PASSWORD);
  await page.click("text=로그인 하기");

  // login post
  const loginPostData = await request.post(`${baseURL}/auth/login`, {
    data: {
      email: USER_EMAIL,
      password: USER_PASSWORD,
    },
  });

  // login check
  expect(loginPostData.ok()).toBeTruthy();
  // check for user token
  const userLoginData = await loginPostData.json();

  // check user info post
  const userInfoData = await request.post(`${baseURL}/auth/check`, {
    headers: {
      "x-access-token": userLoginData.data.token,
    },
  });

  // userInfo
  const userInfo = await userInfoData.json();
  expect(userInfo.data.email).toEqual(USER_EMAIL);
  expect(userInfo.data.nickname).toEqual("testUser");
});

test.describe.configure({ mode: "parallel" });
test.describe("메인페이지 테스트", () => {
  test("SEO 검사", async ({ page }) => {
    const headingH2Arr = [
      "합격한 인재들의 데이터 정보 확인하기",
      "실시간 채용 공고 NEW",
      "생생한 기업 댓글 확인하기",
      "인기 취업 꿀팁 게시글",
      "실시간 커뮤니티 글 모음",
      "스펙평가 BEST",
    ];

    await expect(page).toHaveTitle("고초대졸닷컴 | 생산직 취업의 새로운 기준");
    await expect(page.locator("h1")).toHaveText("고초대졸닷컴 | 생산직 취업의 새로운 기준");
    await expect(page.locator("h2")).toContainText(headingH2Arr);
  });

  // 결과가 없다면 다음 대처방식의 대한 고민 만약 Header 컴포넌트가 없다면 다음으로 ...??
  test("Header component 테스트", async ({ page }) => {
    await page.locator("_react=Header").nth(0).locator("a").nth(0).click();
    await expect(page).toHaveURL(`${linkObj.baseUrl}/`);

    const headerInNavLi = page.locator("_react=Header").nth(0).locator("nav > ul > li");

    await headerInNavLi.nth(0).hover();
    await expect(headerInNavLi.nth(0).locator("ul")).toHaveCSS("display", "block");

    await headerInNavLi.nth(1).hover();
    await expect(headerInNavLi.nth(1).locator("ul")).toHaveCSS("display", "block");

    await headerInNavLi.nth(3).hover();
    await expect(headerInNavLi.nth(3).locator("ul")).toHaveCSS("display", "block");
  });

  test("기능 테스트", async ({ page }) => {
    await page.locator("text=꿀팁보기").click();
    await expect(page).toHaveURL(`${linkObj.baseUrl}${linkObj.COMMUNITY_TIPS_LIST_URL}`);
    await page.goto(linkObj.baseUrl);
    const jobCardArr = page.locator("_react=JobCardList").locator("_react=JobSmallCard");
    await page.locator(`button:has-text("실시간")`).click();
    await expect(jobCardArr).toHaveCount(9);
    await page.locator(`button:has-text("마감임박")`).click();
    await expect(jobCardArr).toHaveCount(9);
    await page.locator(`button:has-text("조회수")`).click();
    await expect(jobCardArr).toHaveCount(9);
    await page.locator(`button:has-text("인기")`).click();
    await expect(jobCardArr).toHaveCount(9);
    await page.locator("text=데이터랩 바로가기").click();
    await expect(page).toHaveURL(`${linkObj.baseUrl}${linkObj.DATALAB_DETAIL}`);
  });
});
