import { ReactElement } from "react";

import { useStatistics } from "@/api";
import { ErrorScreen, GlobalLayout, LoadingScreen } from "@/component";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import UserDataPart from "./index/part/userDataPart";
import WebsiteDataPart from "./index/part/websiteDataPart";

const Home: NextPageWithLayout = () => {
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

Home.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default Home;
