import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/types";
import { mainContainer } from "@/style/commonStyles";
import { GlobalLayout } from "@/component";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";
import { MoveBannerPart } from "./part/moveBannerPart";

const TopBanner: NextPageWithLayout = () => (
  <main css={mainContainer}>
    <UploadBannerPart />
    <BannerListPart />
    <MoveBannerPart />
  </main>
);

TopBanner.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default TopBanner;
