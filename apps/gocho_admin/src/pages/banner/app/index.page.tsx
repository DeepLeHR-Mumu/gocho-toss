import { ReactElement } from "react";

import { useMainBannerArr } from "shared-api/banner";

import { mainContainer } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

const AppJdBanner: NextPageWithLayout = () => {
  const { data: bannerDataArr, isLoading, isError } = useMainBannerArr();

  if (!bannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2>앱 공고배너 등록</h2>
    </main>
  );
};

AppJdBanner.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default AppJdBanner;
