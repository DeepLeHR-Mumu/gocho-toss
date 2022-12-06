import { FunctionComponent } from "react";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { pageTitle } from "@style/commonStyles";

import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useBannerArr({ type: "S" });

  return (
    <>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section>
        {bannerDataArr?.bannerDataArr.map((banner) => {
          return <BannerBox key={`ManagerAsideBanner${banner.id}`} banner={banner} />;
        })}
      </section>
    </>
  );
};
