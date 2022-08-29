import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";
import { DdayBox } from "@component/common/atom/dDayBox";
import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { MAIN_URL } from "@constant/internalURL";

import {
  cardWrapper,
  jobInfoContainer,
  companyLogoBox,
  jobInfoBox,
  companyNameBox,
  companyNameCSS,
  titleCSS,
  jobCardSkeleton,
} from "./style";
import { JobSmallCardProps, JobSmallCardSkeleton } from "./type";

export const JobSmallCard: FunctionComponent<
  JobSmallCardProps | JobSmallCardSkeleton
> = ({ jobData, isSkeleton }) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);
  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }
  return (
    <Link href={MAIN_URL} passHref>
      <a css={cardWrapper} aria-label={`${jobData.title} 채용 공고로 이동`}>
        <div css={jobInfoContainer}>
          <div css={companyLogoBox}>
            <Image
              layout="fill"
              objectFit="contain"
              src={imageSrc}
              alt=""
              onError={() => {
                return setImageSrc(defaultCompanyLogo);
              }}
            />
          </div>
          <div css={jobInfoBox}>
            <div css={companyNameBox}>
              <p>
                <strong css={companyNameCSS}>{jobData.companyName}</strong>
              </p>
              <DdayBox endTime={jobData.endTime} />
            </div>
            <p css={titleCSS}>{jobData.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
  return null;
};
