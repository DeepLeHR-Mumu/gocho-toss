import type { NextPage } from "next";

import { useStatistics } from "@/api/stat/useStatistics";
import { ErrorScreen, LoadingScreen } from "@/component/global/screen";
import { mainContainer, pageTitle } from "@/style/commonStyles";

import UserDataPart from "./index/part/userDataPart";
import WebsiteDataPart from "./index/part/websiteDataPart";

const Home: NextPage = () => {
  const { data: dashboardData, isLoading, isError } = useStatistics();

  if (isError) {
    return <ErrorScreen />;
  }

  if (!dashboardData || isLoading) {
    return <LoadingScreen />;
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
