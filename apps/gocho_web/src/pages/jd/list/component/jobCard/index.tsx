import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";
import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { dateConverter } from "@util/date";
import { DdayBox } from "@component/common/atom/dDayBox";

import { JobCardProps, JobCardSkeleton } from "./type";
import {
  cardWrapper,
  tempFlex,
  companyLogoBox,
  dateInfoContainer,
  date,
  companyName,
  titleCSS,
  detailInfoContainer,
} from "./style";

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({
  jobData,
  isSkeleton,
}) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);

  if (isSkeleton || jobData === undefined) {
    return (
      <div>
        <SkeletonBox />
      </div>
    );
  }

  const {
    year: startYear,
    month: startMonth,
    date: startDate,
  } = dateConverter(jobData.startTime);

  const {
    year: endYear,
    month: endMonth,
    date: endDate,
  } = dateConverter(jobData.endTime);

  return (
    <article css={cardWrapper}>
      <div css={tempFlex}>
        <div css={companyLogoBox}>
          <Image
            layout="fill"
            objectFit="contain"
            src={imageSrc}
            alt={`${jobData.companyLogo} 기업 로고`}
            onError={() => {
              return setImageSrc(defaultCompanyLogo);
            }}
          />
        </div>
        <div>
          <div css={dateInfoContainer}>
            <div css={date}>
              {`${startYear}/${startMonth}/${startDate}`}~
              {`${endYear}/${endMonth}/${endDate}`}
            </div>
            <DdayBox endTime={jobData.endTime} />
          </div>
          <div css={companyName}>{jobData.companyName}</div>
          <h2 css={titleCSS}>{jobData.title}</h2>
          <div css={detailInfoContainer}>
            <div>{jobData.high ? 1 : 0}</div>
            <div>{jobData.college ? 1 : 0}</div>
            <div>{jobData.placeArr}</div>
            {/* TODO: 1군데일 경우 혹은 아닐 경우 */}
            <div>{jobData.rotationArr}</div>
          </div>
        </div>
      </div>

      <div>{jobData.bookmark}</div>
      <div>{jobData.view}</div>

      <div>채용중인 직무 {jobData.taskArr.length}</div>
      <div>{jobData.taskArr}</div>
    </article>
  );
};
