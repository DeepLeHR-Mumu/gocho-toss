import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import { dummyArrCreator } from "shared-util";
import defaultCompanyBg from "shared-image/global/common/default_company_bg.webp";

import { useMainBannerArr } from "@/apis/banners";
import { SkeletonBox } from "@/components";

import { cssObj } from "./style";
import { setCarouselSetting } from "./util";

export const AdPart: FunctionComponent = () => {
  const { data: bannerDataObj } = useMainBannerArr();

  const sliderRef = useRef<Slider>(null);

  return (
    <section css={cssObj.sectionContainer}>
      <Slider {...setCarouselSetting} ref={sliderRef} css={cssObj.sliderContainer}>
        {bannerDataObj
          ? bannerDataObj.bannerDataArr.map((banner) =>
              banner.link !== null ? (
                <Link
                  key={`indexMainBanner${banner.id}`}
                  css={cssObj.banner}
                  href={banner.link || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div css={cssObj.imageWrapper}>
                    <Image src={banner.pcImageUrl || defaultCompanyBg} alt="메인 배너" fill priority />
                  </div>
                </Link>
              ) : (
                <div key={`indexMainBanner${banner.id}`} css={cssObj.banner}>
                  <div css={cssObj.imageWrapper}>
                    <Image src={banner.pcImageUrl || defaultCompanyBg} alt="메인 배너" fill priority />
                  </div>
                </div>
              )
            )
          : dummyArrCreator(3).map((dummy) => (
              <Link key={`indexMainBanner${dummy}`} css={cssObj.banner} href="/">
                <div css={cssObj.imageWrapper}>
                  <SkeletonBox />
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
