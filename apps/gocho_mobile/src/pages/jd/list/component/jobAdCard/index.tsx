import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { dDayCalculator } from "shared-util/date";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { SlideCardProps, SlideCardSkeleton } from "./type";
import {
  cardSkeleton,
  cardWrapper,
  companyLogoBox,
  companyLogoWrapper,
  slideInfo,
  endTime,
  companyName,
  jdTitle,
} from "./style";

export const JobAdCard: FunctionComponent<SlideCardProps | SlideCardSkeleton> = ({ jobData, bgColor, isSkeleton }) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);

  if (isSkeleton || !jobData) {
    return (
      <div css={cardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`}>
      <div css={cardWrapper}>
        <div css={slideInfo(bgColor)}>
          <div css={companyLogoWrapper}>
            <div css={companyLogoBox}>
              <Image
                layout="fill"
                objectFit="contain"
                src={imageSrc || jobData.companyLogo}
                alt={jobData.companyName}
                onError={() => {
                  return setImageSrc(defaultCompanyLogo);
                }}
              />
            </div>
          </div>
          <p css={endTime}>{dDayCalculator(jobData.endTime)}</p>
          <p css={companyName}>{jobData.companyName}</p>
          <strong css={jdTitle}>{jobData.title}</strong>
        </div>
      </div>
    </Link>
  );
};
