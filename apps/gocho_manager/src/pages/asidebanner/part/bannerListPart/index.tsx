import { FunctionComponent } from "react";

import { useBannerArr } from "shared-api/banner/useBannerArr";

import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useBannerArr({ type: "S" });

  return (
    <section>
      {bannerDataArr?.bannerDataArr.map((banner) => {
        return <BannerBox key={`ManagerAsideBanner${banner.id}`} banner={banner} />;
      })}
    </section>
  );
};
