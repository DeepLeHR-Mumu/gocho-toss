import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { useBannerArr } from "shared-api/banner/useBannerArr";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobAdCard } from "shared-ui/card/jobAdCard";
import { setCarouselSetting } from "./util";

import { listContainer, sliderButton, sliderButtonContainer } from "./style";

export const JobAdCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: bannerDataArr, isLoading } = useBannerArr({ type: "T" });

  if (!bannerDataArr || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(3).map((dummy) => {
            return <JobAdCard isSkeleton key={`JobAdCardSkeleton${dummy}`} />;
          })}
        </Slider>
      </div>
    );
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {bannerDataArr.bannerDataArr.map((banner) => {
          return <JobAdCard jobAdData={banner} isMobile={false} key={`JobAdCard${banner.id}`} />;
        })}
      </Slider>
      <div css={sliderButtonContainer}>
        <button
          css={sliderButton}
          aria-label="이전 추천공고보기"
          type="button"
          onClick={() => {
            return sliderRef.current?.slickPrev();
          }}
        >
          <FiChevronLeft />
        </button>

        <button
          css={sliderButton}
          aria-label="다음 추천공고보기"
          type="button"
          onClick={() => {
            return sliderRef.current?.slickNext();
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
