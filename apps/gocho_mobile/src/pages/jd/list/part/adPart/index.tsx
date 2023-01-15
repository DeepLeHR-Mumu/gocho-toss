import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useBannerArr } from "shared-api/banner/useBannerArr";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { setCarouselSetting } from "./util";
import { carouselContainer } from "./style";
import { JobAdCard } from "../../component/jobAdCard";
import { KeumhoAdCard } from "../../component/keumhoAdCard";

export const AdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: bannerDataArr, isLoading } = useBannerArr({ type: "T" });

  if (!bannerDataArr || isLoading) {
    return (
      <div>
        <section css={carouselContainer}>
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {dummyArrCreator(3).map((dummy) => {
              return <JobAdCard key={`jobAd${dummy}`} isSkeleton />;
            })}
          </Slider>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section css={carouselContainer}>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          <KeumhoAdCard />
          {bannerDataArr.bannerDataArr.map((banner) => {
            return <JobAdCard jobData={banner} key={`jobAd${banner.id}`} />;
          })}
        </Slider>
      </section>
    </div>
  );
};
