import { FunctionComponent } from "react";

import { useSideBannerArr } from "shared-api/banner";

import { pageTitle } from "@/style/commonStyles";

import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useSideBannerArr();

  return (
    <>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section>
        {bannerDataArr?.bannerDataArr.map((banner) => (
          <BannerBox key={`ManagerAsideBanner${banner.id}`} banner={banner} />
        ))}
      </section>
    </>
  );
};
