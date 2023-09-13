import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import { useMainBannerArr } from "@/apis/ads";

import { useGetDeviceType } from "@/globalStates";
import { cssObj } from "./style";
import { setCarouselSetting } from "./util";

export const AdPart: FunctionComponent = () => {
  const { data: bannerDataObj } = useMainBannerArr();
  const { isMobile } = useGetDeviceType();

  const sliderRef = useRef<Slider>(null);

  return (
    <section css={cssObj.sectionContainer}>
      <Slider {...setCarouselSetting(isMobile)} ref={sliderRef} css={cssObj.sliderContainer}>
        {bannerDataObj?.bannerDataArr.map((banner) => (
            <Link key={`indexMainBanner${banner.id}`} css={cssObj.banner} href={banner.link || ""}>
              <div css={cssObj.imageWrapper}>
                <Image src={banner.pcImageUrl} alt="메인 배너" fill priority />
              </div>
            </Link>
          ))}
      </Slider>
      <button
        css={cssObj.sliderButton("left")}
        aria-label="이전 추천공고보기"
        type="button"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <FiChevronLeft />
      </button>
      <button
        css={cssObj.sliderButton("right")}
        aria-label="이전 추천공고보기"
        type="button"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
