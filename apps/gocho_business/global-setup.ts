import { request, FullConfig } from "@playwright/test";
import { BUSINESS_BACKEND_URL } from "shared-constant/e2e/externalURL";

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const requestContext = await request.newContext();
  await requestContext.post(`${BUSINESS_BACKEND_URL}/auth/login`, {
    data: {
      requestObj: {
        email: "teemo@deeplehr.com",
        password: "deeple1!",
      },
    },
  });

  await requestContext.storageState({ path: storageState as string });
  await requestContext.dispose();
}

export default globalSetup;
