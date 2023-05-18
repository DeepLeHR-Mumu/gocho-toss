import { ReactElement } from "react";

import { mainContainer } from "@/style/commonStyles";
import { GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { UploadBannerPart } from "./part/uploadBannerPart";
import { BannerListPart } from "./part/bannerListPart";

const AppJdBanner: NextPageWithLayout = () => (
  <main css={mainContainer}>
    <UploadBannerPart />
    <BannerListPart />
  </main>
);

AppJdBanner.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default AppJdBanner;
