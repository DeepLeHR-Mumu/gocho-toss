import { FunctionComponent } from "react";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";

import { DdayBox } from "shared-ui/common/atom/dDayBox";

import { cardWrapper, companyLogoBox, companyNameCSS, jobInfoBox, titleCSS, bookmarkButton } from "./style";
import { JobCardProps } from "./type";

export const JobCard: FunctionComponent<JobCardProps> = ({ jobData }) => {
  return (
    <article css={cardWrapper}>
      <button type="button" aria-label={`${jobData.companyName} 북마크 해지하기`} css={bookmarkButton}>
        <BsFillBookmarkFill />
      </button>
      <div css={companyLogoBox}>
        <Image layout="fill" objectFit="contain" src={jobData.companyLogo} alt={`${jobData.companyName}의 로고`} />
      </div>
      <div css={jobInfoBox}>
        <DdayBox endTime={jobData.endTime} />
        <p css={companyNameCSS}>{jobData.companyName}</p>
        <p css={titleCSS}>{jobData.title}</p>
      </div>
    </article>
  );
};
