import { FunctionComponent, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { dummyArrCreator } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useCompanyKeywordArr } from "@/apis/keyword";
import { CompanyCard } from "@/components";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

export const CompanyPart: FunctionComponent = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");
  const sliderRef = useRef<Slider>(null);

  const { data: companyKeywordDataObj } = useCompanyKeywordArr();

  // useEffect(() => {
  //   if (companyKeywordDataObj) setSelectedKeyword(companyKeywordDataObj[0].keyword);
  // }, [companyKeywordDataObj, selectedKeyword, setSelectedKeyword]);

  if (!companyKeywordDataObj) {
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
            aria-label="이전 회사보기"
            type="button"
            onClick={() => {
              return sliderRef.current?.slickPrev();
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton}
            aria-label="이후 회사보기"
            type="button"
            onClick={() => {
              return sliderRef.current?.slickNext();
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div css={cssObj.sliderContainer}>
        {companyKeywordDataObj.map((companyKeyword) => {
          return (
            <button
              type="button"
              key={`indexCompanyKeyword${companyKeyword.keyword}`}
              onClick={() => {
                return setSelectedKeyword(companyKeyword.keyword);
              }}
            >
              {companyKeyword.keyword}
            </button>
          );
        })}
        <Slider {...setCarouselSetting} ref={sliderRef} />
      </div>
      <div>
        {companyKeywordDataObj.map((companyKeyword) => {
          if (companyKeyword.keyword === selectedKeyword) {
            const selectedCompanyKeyword = companyKeyword.companyArr;
            selectedCompanyKeyword.map((company) => {
              return (
                <CompanyCard
                  key={company.id}
                  logoSrc={company.logoUrl || defaultCompanyLogo}
                  name={company.name}
                  hashTagArr={[company.name]}
                  buttonHandler={() => {
                    return null;
                  }}
                />
              );
            });
          }
          return null;
        })}
      </div>
    </section>
  );
};
