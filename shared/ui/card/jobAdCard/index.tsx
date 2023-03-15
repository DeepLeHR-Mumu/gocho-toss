import { FunctionComponent } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { dateConverter } from "shared-util/date";
import { jdAdClickEvent } from "shared-ga/jd";

import { SkeletonBox } from "../../common/atom/skeletonBox";
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
  buttonBox,
} from "./style";

export const JobAdCard: FunctionComponent<JobAdCardProps | JobAdCardSkeleton> = ({
  jobAdData,
  isSkeleton,
  isMobile,
}) => {
  if (isSkeleton || jobAdData === undefined) {
    return (
      <div css={jobAdCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const { month: startMonth, date: startDate } = dateConverter(jobAdData.jdStartTime);
  const { month: endMonth, date: endDate } = dateConverter(jobAdData.jdEndTime);

  return (
    <>
      <a
        css={cardWrapper(isMobile)}
        href={`${JOBS_DETAIL_URL}/${jobAdData.jdId}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          type="button"
          css={buttonBox}
          onClick={() => {
            if (jobAdData.jdId) jdAdClickEvent(jobAdData.id, jobAdData.jdId);
          }}
        >
          <div css={mainContainer}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={jobAdData?.companyLogo || defaultCompanyLogo}
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
        </button>
      </a>
      {/* LATER : 관리자페이지 color 연결 */}
      <div css={colorLine(jobAdData?.color || "#2284a5", isMobile)} />
    </>
  );
};
