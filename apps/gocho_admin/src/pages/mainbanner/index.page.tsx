import { ReactElement } from "react";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { mainContainer } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";

const MainBanner: NextPageWithLayout = () => {
  const { data: bannerDataArr, isLoading, isError } = useBannerArr({ type: "M" });

  if (!bannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <UploadBannerPart />
      <BannerListPart />
    </main>
  );
};

MainBanner.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default MainBanner;
