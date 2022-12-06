import type { NextPage } from "next";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { mainContainer } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";
import { MoveBannerPart } from "./part/moveBannerPart";

const TopBanner: NextPage = () => {
  const { data: bannerDataArr, isLoading, isError } = useBannerArr({ type: "T" });

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

export default TopBanner;
