import { FunctionComponent } from "react";

import { dDayCalculator } from "shared-util/date";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { SlideCardProps, SlideCardSkeleton } from "./type";
import { cardSkeleton, cardWrapper, slideInfo, endTime, companyName, jdTitle } from "./style";

export const JobAdCard: FunctionComponent<SlideCardProps | SlideCardSkeleton> = ({ jobData, bgColor, isSkeleton }) => {
  if (isSkeleton || !jobData) {
    return (
      <div css={cardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <div css={cardWrapper}>
      <div css={slideInfo(bgColor)}>
        <p css={endTime}>{dDayCalculator(jobData.endTime)}</p>
        <p css={companyName}>{jobData.companyName}</p>
        <h3 css={jdTitle}>{jobData.title}</h3>
      </div>
    </div>
  );
};
