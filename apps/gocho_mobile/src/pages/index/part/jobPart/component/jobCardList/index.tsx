import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util";
import { MainJobCard } from "shared-ui/card/MainJobCard";
import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";

import { useModal } from "@/globalStates";

import { setCarouselSetting } from "./util";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const {
    data: jobData,
    isLoading,
    isError,
  } = useJobArr({
    order: "recent",
    filter: "valid",
    size: 9,
    page: 1,
  });

  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });
  const { setModal } = useModal();

  const loginOpener = () => {
    setModal("loginModal", { button: "close" });
  };

  if (!jobData || isError || isLoading) {
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
          const isBookmarked = Boolean(
            userJobBookmarkArr?.some((job) => {
              return job.id === data.id;
            })
          );
          return (
            <MainJobCard
              key={`MainJobCard${data.id}`}
              jobData={data}
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
