import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator('button[aria-label="통합검색 열기"]').click();
  await page.locator('input[placeholder="궁금한 기업/공고를 검색해보세요"]').fill("현대");
  await page.locator('button[aria-label="통합 검색하기"]').click();
  // ?ㅑ재덜
  await page.waitForLoadState("load");
});

// test.describe("통합 검색페이지 테스트", () => {
//   test("jd, company api 호출 후 비교 체크", async ({ page }) => {
//     const response = await Promise.all([
//       page.waitForResponse(
//         (response) =>
//           response
//             .url()
//             .includes(
//               "jds?order=recent&filter=valid&limit=4&offset=0&q=%7B%22searchWord%22:%22%ED%98%84%EB%8C%80%22%7D"
//             ) && response.status() === 200
//       ),
//       page.waitForResponse(
//         (response) =>
//           response.url().includes("companies?order=recent&filter=valid&limit=2&offset=0&q=%ED%98%84%EB%8C%80") &&
//           response.status() === 200
//       ),
//     ]);

//     expect(response[0].ok()).toBeTruthy();
//     expect(response[1].ok()).toBeTruthy();
//     const jdData = await response[0].json();
//     const companyData = await response[1].json();
//     // jd, company data
//     const jdArrData = await jdData.data;
//     const companyArrData = await companyData.data;

//     expect(jdArrData.length).toBe(4);
//     expect(companyArrData.length).toBe(2);
//     await expect(page.locator(`button:has-text("전체 ${jdData.count + companyData.count}")`)).toBeVisible();
//     await expect(page.locator(`button:has-text("공고 ${jdData.count}")`)).toBeVisible();
//     await expect(page.locator(`button:has-text("기업 ${companyData.count}")`)).toBeVisible();
//   });

test("타이틀, heading 검사", async ({ page }) => {
  await expect(page).toHaveTitle("고초대졸닷컴 | 생산직 취업의 새로운 기준");
  await expect(page.locator("h1")).toHaveText("고초대졸닷컴 | 생산직 취업의 새로운 기준");
});

//   test("특수문자 검색시 토스트 작동여부", async ({ page }) => {
//     await page.locator('button[aria-label="통합검색 열기"]').click();
//     await page.locator('input[placeholder="궁금한 기업/공고를 검색해보세요"]').fill("@");
//     await page.locator('button[aria-label="통합 검색하기"]').click();
//     await expect(page.locator(`p:has-text("검색어에 특수문자는 포함될 수 없습니다.")`)).toBeVisible();
//   });

//   test("로그인, 비로그인 북마크 클릭시 작동여부", async ({ page }) => {
//     // 비로그인 북마크 체크
//     await page.locator('button[aria-label="공고 북마크 하기"]').nth(0).click();
//     await expect(page.locator(`p:has-text("로그인이 필요한 서비스입니다.")`)).toBeVisible();
//     await page.locator('button:has-text("닫기")').click();
//     await page.locator('button[aria-label="기업 북마크 하기"]').nth(0).click();
//     await expect(page.locator(`p:has-text("로그인이 필요한 서비스입니다.")`)).toBeVisible();
//     await page.locator('button:has-text("닫기")').click();

//     //  로그인 후 북마크 체크
//     const USER_EMAIL = "myTest@naver.com";
//     const USER_PASSWORD = "12341234";

//     await page.locator('button[aria-label="메뉴 열기"]').click();
//     await page.locator('button:has-text("로그인")').click();
//     await page.locator('input[name="email"]').fill(USER_EMAIL);
//     await page.locator('input[name="password"]').fill(USER_PASSWORD);
//     await page.locator('role=button[name="로그인"]').click();
//     await page.waitForResponse((response) => response.url().includes("auth/login"));
//     await page.reload();
//     const [responseJdBookmark] = await Promise.all([
//       page.waitForResponse((response) => response.url().includes("jd-bookmarks") && response.status() === 201),
//       page.click('button[aria-label="공고 북마크 하기"]'),
//     ]);

//     const [responseCompanyBookmark] = await Promise.all([
//       page.waitForResponse((response) => response.url().includes("company-bookmarks") && response.status() === 201),
//       page.click('button[aria-label="기업 북마크 하기"]'),
//     ]);

//     expect(responseJdBookmark.ok()).toBeTruthy();
//     expect(responseCompanyBookmark.ok()).toBeTruthy();

//     await page.reload();
//     const [responseJdBookmarkDelete] = await Promise.all([
//       page.waitForResponse((response) => response.url().includes("jd-bookmarks") && response.status() === 204),
//       page.click('button[aria-label="공고 북마크 해지"]'),
//     ]);

//     const [responseCompanyBookmarkDelete] = await Promise.all([
//       page.waitForResponse((response) => response.url().includes("company-bookmarks") && response.status() === 204),
//       page.click('button[aria-label="기업 북마크 해지"]'),
//     ]);

//     expect(responseJdBookmarkDelete.ok()).toBeTruthy();
//     expect(responseCompanyBookmarkDelete.ok()).toBeTruthy();
//   });

//   test("더보기 버튼 체크", async ({ page }) => {
//     // search페이지에서 메인 채용공고 버튼 클릭
//     await page.goto(`/search`);
//     await page.getByRole("button", { name: "채용공고 더보기" }).click();
//     await expect(page).toHaveURL(`/search?q=&page=1&menu=공고`);

//     // search페이지에서 메인 기업정보 버튼 클릭
//     await page.goto(`/search`);
//     await page.getByRole("button", { name: "기업정보 더보기" }).click();
//     await expect(page).toHaveURL(`/search?q=&page=1&menu=기업`);

//     // search페이지에서 상단 nav 버튼 클릭
//     await page.goto(`/search`);
//     await page.getByRole("button", { name: "기업" }).click();
//     await page.getByRole("button", { name: "공고" }).click();
//   });

//   test("페이지네이션 체크", async ({ page }) => {
//     await page.goto(`/search`);
//     await page.getByRole("button", { name: "공고" }).click();
//     const jdResponse = await page.waitForResponse(
//       (response) => response.url().includes("jds") && response.status() === 200
//     );

//     const jdData = await jdResponse.json();
//     const jdLastPage = Math.ceil(jdData.count / 10);

//     await page.locator('role=button[name="2번 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=공고&q=&page=2`);
//     await page.locator('role=button[name="다음 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=공고&q=&page=3`);
//     await page.locator('role=button[name="첫 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=공고&q=&page=1`);
//     await page.getByRole("button", { name: "마지막 페이지로 이동" }).click();
//     await expect(page).toHaveURL(`/search?menu=공고&q=&page=${jdLastPage}`);

//     await page.reload();

//     // 기업 페이지네이션 체크
//     await page.getByRole("button", { name: "기업" }).click();
//     const companyResponse = await page.waitForResponse(
//       (response) => response.url().includes("companies") && response.status() === 200
//     );

//     const companyData = await companyResponse.json();
//     const companyLastPage = Math.ceil(companyData.count / 6);

//     await page.locator('role=button[name="2번 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=기업&q=&page=2`);
//     await page.locator('role=button[name="다음 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=기업&q=&page=3`);
//     await page.locator('role=button[name="첫 페이지로 이동"]').click();
//     await expect(page).toHaveURL(`/search?menu=기업&q=&page=1`);
//     await page.getByRole("button", { name: "마지막 페이지로 이동" }).click();
//     await expect(page).toHaveURL(`/search?menu=기업&q=&page=${companyLastPage}`);
//   });

//   test("쿼리값 없을시 기본 쿼리값 검사", async ({ page }) => {
//     await page.goto(`/search`);
//     await expect(page).toHaveURL(`/search?menu=전체&q=&page=1`);
//   });

//   test("공고 디테일페이지 _blank 확인", async ({ page, context }) => {
//     await page.getByRole("button", { name: "공고" }).click();
//     const [jdDetailPage] = await Promise.all([
//       context.waitForEvent("page"),
//       page.locator("main > div > section > section > article").first().locator("a").click(),
//     ]);

//     await jdDetailPage.waitForLoadState("domcontentloaded");
//     await expect(jdDetailPage).toHaveURL(jdDetailPage.url());
//     await jdDetailPage.close();
//   });

//   test("기업 디테일페이지 확인", async ({ page, context }) => {
//     await page.getByRole("button", { name: "기업" }).click();
//     await page.locator("main > div > section > section > article").first().locator("a").click();
//     await page.waitForNavigation();
//     expect(page.url().includes("info=detail")).toBeTruthy();
//   });

//   test("페이지 닫기", async ({ page }) => {
//     await page.close();
//   });
// });
