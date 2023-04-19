import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util";
import { MainJobCard } from "shared-ui/card/MainJobCard";

import { useModal } from "@/globalStates";

import { setCarouselSetting } from "./util";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: jobData } = useJobArr({
    order: "recent",
    filter: "valid",
    size: 9,
    page: 1,
  });

  const { setModal } = useModal();

  const loginOpener = () => {
    setModal("loginModal", { button: "close" });
  };

  if (!jobData) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <MainJobCard key={`MainJobCardSkeleton${value}`} isSkeleton />;
          })}
        </Slider>
      </div>
    );
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {jobData.jobDataArr.map((data) => {
          return <MainJobCard key={`MainJobCard${data.id}`} jobData={data} isMobile loginOpener={loginOpener} />;
        })}
      </Slider>
    </div>
  );
};
