import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { useStatistics } from "@api/stat/useStatistics";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import UserDataPart from "@pages/indexComponent/part/userDataPart";
import WebsiteDataPart from "@pages/indexComponent/part/websiteDataPart";

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
      <UserDataPart dashboardData={dashboardData} />
      <WebsiteDataPart dashboardData={dashboardData} />
    </main>
  );
};

export default Home;
