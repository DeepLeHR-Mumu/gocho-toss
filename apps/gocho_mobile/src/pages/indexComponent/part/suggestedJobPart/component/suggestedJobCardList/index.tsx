import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobAdCard } from "shared-ui/card/jobAdCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useBannerArr } from "shared-api/banner/useBannerArr";
import { setCarouselSetting } from "./util";
import { listContainer, controlWrapper, buttonCSS } from "./style";

export const SuggestedJobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: bannerDataArr, isLoading, isError } = useBannerArr({ type: "T" });

  if (!bannerDataArr || isError || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <JobAdCard isSkeleton key={`JobAdCardSkeleton${value}`} />;
          })}
        </Slider>
      </div>
    );
  }
  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {bannerDataArr.bannerDataArr.map((banner) => {
          return <JobAdCard jobAdData={banner} isMobile key={`JobAdCard${banner.id}`} />;
        })}
      </Slider>

      <div css={controlWrapper}>
        <button type="button" css={buttonCSS} aria-label="이전 추천공고 이동" onClick={sliderRef.current?.slickPrev}>
          <BsChevronLeft />
        </button>

        <button type="button" css={buttonCSS} aria-label="다음 추천공고 이동" onClick={sliderRef.current?.slickNext}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};
