import { FunctionComponent } from "react";
import Image from "next/image";
import dayjs from "dayjs";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant";
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

  return (
    <>
      <a
        css={cardWrapper(isMobile)}
        href={`${JOBS_DETAIL_URL}/${jobAdData.jd.id}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          type="button"
          css={buttonBox}
          onClick={() => {
            if (jobAdData.jd.id) jdAdClickEvent(jobAdData.id, jobAdData.jd.id);
          }}
        >
          <div css={mainContainer}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image fill src={jobAdData.company.logoUrl || defaultCompanyLogo} alt="" sizes="1" />
              </div>
            </div>
            <div css={infoContainer}>
              <p css={companyName}>{jobAdData.company.name}</p>
              <p css={date}>
                {dayjs(jobAdData.jd.endTime).format("YYYY") === "9999" && dayjs(jobAdData.jd.startTime).format("MM.DD")}
                {dayjs(jobAdData.jd.endTime).format("YYYY") !== "9999" &&
                  dayjs(jobAdData.jd.startTime).format("MM.DD")}{" "}
                ~ {dayjs(jobAdData.jd.endTime).format("MM.DD")}
              </p>
            </div>
          </div>
          <strong css={titleCSS}>{jobAdData.jd.title}</strong>
        </button>
      </a>
      <div css={colorLine(jobAdData?.color || "#2284a5", isMobile)} />
    </>
  );
};
