import { FunctionComponent } from "react";
import Image from "next/image";

import { CDN_URL } from "shared-constant/externalURL";
import { DdayBox } from "shared-ui/common/atom/dDayBox";

import {
  cardWrapper,
  companyLogoBox,
  companyNameBox,
  companyNameCSS,
  jobInfoBox,
  jobInfoContainer,
  titleCSS,
  buttonContainer,
  bookmarkButtonWrapper,
  bookmarkButtonBox,
  button,
} from "./style";
import { JobCardProps } from "./type";

export const JobCard: FunctionComponent<JobCardProps> = ({ jobData }) => {
  return (
    <article css={cardWrapper}>
      <div css={jobInfoContainer}>
        <div css={companyLogoBox}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${CDN_URL}/company_images/${jobData.company.id}/logo.png`}
            alt={`${jobData.company.name} 기업 로고`}
          />
        </div>
        <div css={jobInfoBox}>
          <div css={companyNameBox}>
            <h3 css={companyNameCSS}>{jobData.company.name}</h3>
            <DdayBox endTime={jobData.endTime} />
          </div>
          <p css={titleCSS}>{jobData.title}</p>
        </div>
      </div>
      <div css={buttonContainer}>
        <div css={bookmarkButtonWrapper}>
          <div css={bookmarkButtonBox}>
            <Image layout="fill" objectFit="contain" src="/images/global/star.png" alt="북마크 버튼" />
          </div>
        </div>
        <button type="button" css={button}>
          상세공고
        </button>
        <button type="button" css={button}>
          지원하기
        </button>
      </div>
    </article>
  );
};
