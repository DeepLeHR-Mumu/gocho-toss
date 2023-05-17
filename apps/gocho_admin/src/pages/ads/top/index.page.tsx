import { ReactElement } from "react";

import { useTopBannerArr } from "shared-api/ads";

import type { NextPageWithLayout } from "@/types";
import { mainContainer } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";
import { MoveBannerPart } from "./part/moveBannerPart";

const TopBanner: NextPageWithLayout = () => {
  const { data: bannerDataArr, isLoading, isError } = useTopBannerArr();

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
      <MoveBannerPart />
    </main>
  );
};

TopBanner.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default TopBanner;
