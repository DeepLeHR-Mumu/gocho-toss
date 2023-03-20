import type { NextPage } from "next";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { mainContainer } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@/component";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";

const MainBanner: NextPage = () => {
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

export default MainBanner;
