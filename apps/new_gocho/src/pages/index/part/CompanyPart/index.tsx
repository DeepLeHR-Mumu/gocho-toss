import { FunctionComponent, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { dummyArrCreator } from "shared-util";
import { Chip } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useCompanyKeywordArr } from "@/apis/keyword";
import { CompanyCard } from "@/components";

import { useGetDeviceType } from "@/globalStates";
import { setCarouselSetting } from "./util";
import { selectedCompanyDef } from "./type";
import { cssObj } from "./style";

export const CompanyPart: FunctionComponent = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>();
  const [selectedCompanyArr, setSelectedCompanyArr] = useState<selectedCompanyDef[]>();
  const sliderRef = useRef<Slider>(null);

  const { isMobile } = useGetDeviceType();
  const { data: companyKeywordDataObj } = useCompanyKeywordArr();

  useEffect(() => {
    if (companyKeywordDataObj) {
      setSelectedKeyword(companyKeywordDataObj[0].keyword);
      setSelectedCompanyArr(companyKeywordDataObj[0].companyArr);
    }
  }, [companyKeywordDataObj]);

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
      <h2 css={cssObj.title}>키워드 별 기업 모아보기</h2>
      <div css={cssObj.controlContainer}>
        <div css={cssObj.keywordContainer}>
          {companyKeywordDataObj.map((companyKeyword) => {
            return (
              <Chip
                type="button"
                size={isMobile ? "small" : "large"}
                color={selectedKeyword === companyKeyword.keyword ? "fillBlue" : "fillGray"}
                key={`indexCompanyKeyword${companyKeyword.keyword}`}
                onClick={() => {
                  setSelectedKeyword(companyKeyword.keyword);
                  setSelectedCompanyArr(companyKeyword.companyArr);
                }}
              >
                {companyKeyword.keyword}
              </Chip>
            );
          })}
        </div>
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
            aria-label="다음 회사보기"
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
        {isMobile ? (
          <div css={cssObj.cardContainer}>
            {selectedCompanyArr?.map((company) => {
              return (
                <CompanyCard
                  key={company.id}
                  logoSrc={company.logoUrl || defaultCompanyLogo}
                  name={company.name}
                  hashTagArr={[company.name]}
                  bookmark={{ state: company.isBookmark, companyId: company.id }}
                />
              );
            })}
          </div>
        ) : (
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {selectedCompanyArr?.map((company) => {
              return (
                <CompanyCard
                  key={company.id}
                  logoSrc={company.logoUrl || defaultCompanyLogo}
                  name={company.name}
                  hashTagArr={[company.name]}
                  bookmark={{ state: company.isBookmark, companyId: company.id }}
                />
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};
