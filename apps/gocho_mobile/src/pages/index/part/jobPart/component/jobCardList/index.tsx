import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util";
import { MainJobCard } from "shared-ui/card/MainJobCard";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";

import { useModal } from "@recoil/hook/modal";

import { setCarouselSetting } from "./util";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: "recent",
    filter: "valid",
    limit: 9,
  });

  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });
  const { setCurrentModal } = useModal();

  const loginOpener = () => {
    setCurrentModal("loginModal", { button: "close" });
  };

  if (!jobDataArr || isError || isLoading) {
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
        {jobDataArr.jobDataArr.map((jobData) => {
          const isBookmarked = Boolean(
            userJobBookmarkArr?.some((job) => {
              return job.id === jobData.id;
            })
          );
          return (
            <MainJobCard
              key={`MainJobCard${jobData.id}`}
              jobData={jobData}
              isMobile
              isBookmarked={isBookmarked}
              userId={userData?.id}
              loginOpener={loginOpener}
            />
          );
        })}
      </Slider>
    </div>
  );
};
