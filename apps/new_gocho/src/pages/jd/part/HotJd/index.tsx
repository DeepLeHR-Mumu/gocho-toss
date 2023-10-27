import { FunctionComponent, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import { dummyArrCreator } from "shared-util";

import { useTopBannerArr } from "@/apis/ads";
import jobiChatting from "@/public/image/jobi/chatting.png";
import { JdCard } from "@/components/common/JdCard";
import { INTERNAL_URL } from "@/constants";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const HotJd: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const { data: jdDataObj } = useTopBannerArr();

  const MAX_SLIDER_INDEX = (jdDataObj?.bannerDataArr.length || 0) - 3;
  const handlePrev = () => {
    if (currentSlide - 1 >= 0) {
      sliderRef.current?.slickGoTo(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide + 1 <= MAX_SLIDER_INDEX) {
      sliderRef.current?.slickGoTo(currentSlide + 1);
    }
  };

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>지금 HOT한 공고 🔥</h2>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.sliderButton(currentSlide === 0)}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={handlePrev}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton(currentSlide >= MAX_SLIDER_INDEX)}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={handleNext}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div css={cssObj.contentContainer}>
        <Link href={`${INTERNAL_URL.JD_LIST}/?page=1&order=recent`} css={cssObj.nowJdBanner}>
          <p css={cssObj.bannerTitle}>
            지금
            <br />
            채용중
            <br />
            공고
            <br />
          </p>
          <div css={cssObj.nowLink}>바로가기 {">"}</div>
          <div css={cssObj.imageWrapper}>
            <Image src={jobiChatting} alt="채용중 공고" fill />
          </div>
        </Link>
        <Slider
          {...setCarouselSetting}
          ref={sliderRef}
          beforeChange={(_oldIndex, newIndex) => {
            setIsDragging(true);
            if (newIndex <= MAX_SLIDER_INDEX) {
              setCurrentSlide(newIndex);
            }
          }}
          afterChange={() => {
            setIsDragging(false);
          }}
        >
          {jdDataObj
            ? jdDataObj.bannerDataArr.map((banner) => (
                <JdCard key={banner.id} jd={{ ...banner.jd, placeArr: [""] }} blockClick={isDragging} ad />
              ))
            : dummyArrCreator(3).map((dummy) => <JdCard key={`hotJd${dummy}`} />)}
        </Slider>
      </div>
    </section>
  );
};
