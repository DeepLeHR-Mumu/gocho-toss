import type { NextPage } from "next";

import { useStatistics } from "@api/stat/useStatistics";

import { ErrorScreen, LoadingScreen } from "@component/screen";
import { mainContainer, pageTitle } from "@style/commonStyles";

import UserDataPart from "./index/part/userDataPart";
import WebsiteDataPart from "./index/part/websiteDataPart";

const Home: NextPage = () => {
  const { data: dashboardData, isLoading, isError } = useStatistics();

  // eslint-disable-next-line no-console
  console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);

  if (!dashboardData || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>대시보드</h2>
      <UserDataPart />
      <WebsiteDataPart />
    </main>
  );
};

export default Home;
