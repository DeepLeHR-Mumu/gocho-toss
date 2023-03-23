import { chromium } from "@playwright/test";

import { INTERNAL_URL } from "@/constant";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const serverUrl = "http://localhost:3000";
  await page.goto(`${serverUrl}${INTERNAL_URL.LOGIN_URL}`);
  await page.getByPlaceholder("아이디(이메일)").fill("admin@deeplehr.com");
  await page.getByPlaceholder("비밀번호").fill("deeple1!");
  await page.getByRole("button", { name: "로그인" }).click();
  await page.waitForLoadState("networkidle");
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
