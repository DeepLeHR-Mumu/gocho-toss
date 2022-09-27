import { FunctionComponent } from "react";

import { BannerCard } from "../bannerCard";

import { bannerArr } from "./constant";
import { bannerWrapper } from "./style";

export const RightBanner: FunctionComponent = () => {
  return (
    <ul css={bannerWrapper}>
      {bannerArr.map((banner) => {
        return (
          <BannerCard
            key={banner.id}
            title={banner.title}
            desc={banner.desc}
            backgroundColor={banner.backgroundColor}
            link={banner.linkUrl}
            iconSrc={banner.iconSrc}
          />
        );
      })}
    </ul>
  );
};
