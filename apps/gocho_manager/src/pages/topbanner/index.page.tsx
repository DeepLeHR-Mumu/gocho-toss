import type { NextPage } from "next";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { mainContainer, pageTitle } from "@style/commonStyles";
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
      <h2 css={pageTitle}>공고 상단 배너 업로드</h2>
      <UploadBannerPart />
      <h2 css={pageTitle}>배너 리스트</h2>
      <BannerListPart />
      <h2 css={pageTitle}>배너 순서 변경</h2>
      <MoveBannerPart />
    </main>
  );
};

export default TopBanner;
