import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { dummyArrCreator } from "shared-util";

import { useCompanyArr } from "@/apis/company";
import { CompanyCard } from "@/components";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const CompanyPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: companyDataObj } = useCompanyArr({ order: "view" });

  if (!companyDataObj) {
    return (
      <section css={cssObj.sectionContainer}>
        <h2 css={cssObj.title}>키워드 별 기업 모아보기</h2>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {dummyArrCreator(3).map((dummy) => {
            return <p key={`mainCompanyCard${dummy}`}>{dummy}</p>;
          })}
        </Slider>
      </section>
    );
  }
  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>키워드 별 기업 모아보기</h2>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => {
              return sliderRef.current?.slickPrev();
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => {
              return sliderRef.current?.slickNext();
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <Slider {...setCarouselSetting} ref={sliderRef}>
        {companyDataObj?.companyDataArr.map((company) => {
          return (
            <CompanyCard key={company.id} logoSrc={company.logoUrl} name={company.name} hashTagArr={[company.size]} />
          );
        })}
      </Slider>
    </section>
  );
};
