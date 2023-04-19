import { FunctionComponent } from "react";

import { useSideArr } from "shared-api/banner";

import { pageTitle } from "@/style/commonStyles";

import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useSideArr();

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
