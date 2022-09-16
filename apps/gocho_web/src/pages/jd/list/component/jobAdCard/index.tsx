import { FunctionComponent } from "react";
import Image from "next/image";

import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { dateConverter } from "shared-util/date";
import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { JobAdCardProps, JobAdCardSkeleton } from "./type";
import {
  jobAdCardSkeleton,
  cardWrapper,
  mainContainer,
  companyLogoWrapper,
  companyLogoBox,
  infoContainer,
  date,
  companyName,
} from "./style";

export const JobAdCard: FunctionComponent<JobAdCardProps | JobAdCardSkeleton> = ({ jobAdData, isSkeleton }) => {
  if (isSkeleton || jobAdData === undefined) {
    return (
      <div css={jobAdCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const { month: startMonth, date: startDate } = dateConverter(jobAdData.startTime);

  const { month: endMonth, date: endDate } = dateConverter(jobAdData.endTime);

  return (
    <article css={cardWrapper}>
      <div css={mainContainer}>
        <div css={companyLogoWrapper}>
          <div css={companyLogoBox}>
            <Image layout="fill" objectFit="contain" src={jobAdData.companyLogo || defaultCompanyLogo} alt="" />
          </div>
        </div>
        <div css={infoContainer}>
          <div css={companyName}>{jobAdData.companyName}</div>
          <div css={date}>
            {`${startMonth}/${startDate}`}~{`${endMonth}/${endDate}`}
          </div>
        </div>
      </div>
      <h3>{jobAdData.title}</h3>
    </article>
  );
};
