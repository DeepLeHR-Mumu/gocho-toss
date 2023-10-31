import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsMegaphone } from "react-icons/bs";

import { Layout } from "@/components";
import { useJdBannerArr } from "@/apis/banners";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const JdBanner = () => {
  const { data: jdBannerData } = useJdBannerArr();

  const sliderRef = useRef<Slider>(null);

  return (
    <section css={cssObj.background}>
      <Layout>
        <div css={cssObj.wrapper}>
          <div css={cssObj.sideTitleWrapper}>
            <div>
              고초대졸닷컴 PICK <BsMegaphone />
            </div>
            <p>오늘의 추천 컨텐츠</p>
          </div>
          <div css={cssObj.sliderWrapper}>
            <Slider {...setCarouselSetting()} ref={sliderRef}>
              {jdBannerData ? (
                jdBannerData.bannerDataArr.map((banner) => (
                  <Link key={banner.id} href={banner.link || ""} target="_blank" rel="noopener noreferrer">
                    <div css={cssObj.bannerWrapper}>
                      <Image src={banner.pcImageUrl} alt="jd-banner" fill priority />
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <div css={cssObj.dummyBanner} />
                </div>
              )}
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
          </div>
        </div>
      </Layout>
    </section>
  );
};
