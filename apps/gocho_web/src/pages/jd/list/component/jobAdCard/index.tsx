import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { dateConverter } from "shared-util/date";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { JobAdCardProps, JobAdCardSkeleton } from "./type";
import {
  jobAdCardSkeleton,
  cardWrapper,
  colorLine,
  mainContainer,
  companyLogoWrapper,
  companyLogoBox,
  infoContainer,
  date,
  companyName,
  titleCSS,
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
    <>
      <Link href={`${JOBS_DETAIL_URL}/${jobAdData.id}`} passHref>
        <a css={cardWrapper}>
          <div css={mainContainer}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={jobAdData.companyLogo || defaultCompanyLogo}
                  alt={jobAdData.companyName}
                />
              </div>
            </div>
            <div css={infoContainer}>
              <p css={companyName}>{jobAdData.companyName}</p>
              <p css={date}>
                {`${startMonth}/${startDate}`}~{`${endMonth}/${endDate}`}
              </p>
            </div>
          </div>
          <strong css={titleCSS}>{jobAdData.title}</strong>
        </a>
      </Link>
      {/* LATER : 관리자페이지 color 연결 */}
      <div css={colorLine("#2284a5")} />
    </>
  );
};
