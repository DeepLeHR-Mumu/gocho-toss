import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { CompanyCommentCard } from "@component/card/companyComment";
import { Layout } from "@component/layout";
import { useCompanyArr } from "@api/company/useCompanyArr";

import {
  partContainer,
  title,
  colorPoint,
  cardListContainer,
  sliderContainer,
  buttonCSSCreator,
} from "./style";
import { setCarouselSetting } from "./util";

export const CompanyCommentPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const { data: companyArrData } = useCompanyArr({ order: "comment" });

  if (!companyArrData) {
    return <>w</>;
  }
  return (
    <div css={partContainer}>
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>생생한</span> 기업 댓글 확인하기
        </h2>
      </Layout>
      <section css={cardListContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef} css={sliderContainer}>
          {companyArrData.map((companyId) => {
            return (
              <CompanyCommentCard
                companyId={companyId}
                key={`companyComment${companyId}`}
              />
            );
          })}
        </Slider>
        <button
          css={buttonCSSCreator("left")}
          aria-label="이전 기업 댓글 확인"
          type="button"
          onClick={() => {
            return sliderRef.current?.slickPrev();
          }}
        >
          <BsChevronLeft />
        </button>
        <button
          css={buttonCSSCreator("right")}
          type="button"
          aria-label="다음 기업 댓글 확인"
          onClick={() => {
            return sliderRef.current?.slickNext();
          }}
        >
          <BsChevronRight />
        </button>
      </section>
    </div>
  );
};
