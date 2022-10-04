import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useModal } from "@recoil/hook/modal/useModal";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { useCompanyArr } from "shared-api/company";
import { CompanyCommentCard } from "shared-ui/card/companyComment";

import { setCarouselSetting } from "./util";
import { listContainer } from "./style";

export const CompanyCommentCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const { data: companyDataArr, isLoading } = useCompanyArr({ order: "view", limit: 6, offset: 0 });
  const { setCurrentModal } = useModal();

  if (!companyDataArr || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <CompanyCommentCard isSkeleton key={`CompanyCommentSkeleton${value}`} />;
          })}
        </Slider>
      </div>
    );
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {companyDataArr.companyDataArr.map((data) => {
          return (
            <CompanyCommentCard
              companyData={data}
              key={`CompanyCommentCard${data.id}`}
              setCurrentModal={setCurrentModal}
              isMobile
            />
          );
        })}
      </Slider>
    </div>
  );
};
