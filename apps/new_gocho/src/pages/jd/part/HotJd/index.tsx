import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import JobiChatting from "shared-image/global/jobi/chatting.png";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";
import { useGetDeviceType } from "@/globalStates";
import { INTERNAL_URL } from "@/pages/constants";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const HotJd: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { isMobile } = useGetDeviceType();
  const { data: jdDataObj } = useJdArr({
    order: "rand",
    filter: "valid",
    page: 1,
    size: 12,
  });

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>지금 HOT한 공고 🔥</h2>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
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
            <Image src={JobiChatting} alt="채용중 공고" fill />
          </div>
        </Link>
        {isMobile ? (
          <div css={cssObj.cardContainer}>
            {jdDataObj?.jdDataArr.map((jd) => (
              <JdCard key={jd.id} jd={jd} />
            ))}
          </div>
        ) : (
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {jdDataObj?.jdDataArr.map((jd) => (
              <JdCard key={jd.id} jd={jd} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};
