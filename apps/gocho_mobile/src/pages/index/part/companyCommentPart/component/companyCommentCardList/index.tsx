import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { dummyArrCreator } from "shared-util";
import { useCompanyArr } from "shared-api/company";
import { CompanyCommentCard } from "shared-ui/card/companyComment";

import { useModal } from "@/globalStates";

import { setCarouselSetting } from "./util";
import { listContainer, buttonCSSCreator } from "./style";

export const CompanyCommentCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const { setModal } = useModal();
  const { data: companyData } = useCompanyArr({ order: "view", size: 6 });

  if (!companyData) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <CompanyCommentCard isSkeleton isMobile key={`CompanyCommentSkeleton${value}`} />;
          })}
        </Slider>
      </div>
    );
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {companyData.companyDataArr.map((data) => {
          return (
            <CompanyCommentCard
              companyData={data}
              key={`CompanyCommentCard${data.id}`}
              setCurrentModal={setModal}
              isMobile
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
    </div>
  );
};
