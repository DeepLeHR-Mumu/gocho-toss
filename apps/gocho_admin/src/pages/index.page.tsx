import type { NextPage } from "next";

import { useStatistics } from "shared-api/admin/stat/useStatistics";

import { ErrorScreen, LoadingScreen } from "@component/screen";
import { mainContainer, pageTitle } from "@style/commonStyles";

import UserDataPart from "./index/part/userDataPart";
import WebsiteDataPart from "./index/part/websiteDataPart";

const Home: NextPage = () => {
  const { data: dashboardData, isLoading, isError } = useStatistics();

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
