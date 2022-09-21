import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useCompanyArr } from "shared-api/company/useCompanyArr";

import { CompanyCommentCard } from "@component/card/companyComment";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import {
  partContainer,
  title,
  colorPoint,
  cardListContainer,
  sliderContainer,
  emptyBox,
  buttonCSSCreator,
} from "./style";
import { setCarouselSetting } from "./util";

export const CompanyCommentPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const { data: companyDataArr } = useCompanyArr({ order: "view" });

  if (!companyDataArr) {
    return (
      <section css={partContainer}>
        <InvisibleH2 title="기업별 댓글" />
        <Layout>
          <p css={title}>
            <span css={colorPoint}>생생한</span> 기업 댓글 확인하기 🙌🏻
          </p>
        </Layout>

        <section css={emptyBox} />
      </section>
    );
  }

  return (
    <section css={partContainer}>
      <InvisibleH2 title="기업별 댓글" />
      <Layout>
        <p css={title}>
          <span css={colorPoint}>생생한</span> 기업 댓글 확인하기 🙌🏻
        </p>
      </Layout>

      <section css={cardListContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef} css={sliderContainer}>
          {companyDataArr.companyDataArr.map((data) => {
            return <CompanyCommentCard companyData={data} key={`companyComment${data.id}`} />;
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
    </section>
  );
};
