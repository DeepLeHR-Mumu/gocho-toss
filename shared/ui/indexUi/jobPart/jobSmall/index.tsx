import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";

import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { SkeletonBox } from "../../../common/atom/skeletonBox";
import { DdayBox } from "../../../common/atom/dDayBox";

import {
  cardWrapper,
  companyLogoBox,
  titleCSS,
  jobCardSkeleton,
  bookmarkButtonCSS,
  flexBox,
  infoBox,
  companyNameCSS,
  bottomInfo,
} from "./style";
import { JobSmallCardProps, JobSmallCardSkeleton } from "./type";

export const JobSmallCard: FunctionComponent<JobSmallCardProps | JobSmallCardSkeleton> = ({ jobData, isSkeleton }) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);

  // NOTMYFAULT OU?

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref>
      <a css={cardWrapper} aria-label={`${jobData.title} 채용 공고로 이동`}>
        <button type="button" css={bookmarkButtonCSS} aria-label={`${jobData.companyName} 북마크하기`}>
          <BsFillBookmarkFill />
        </button>

        <div css={flexBox}>
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

          <div css={infoBox}>
            <DdayBox endTime={jobData.endTime} />
            <p css={companyNameCSS}>{jobData.companyName}</p>
            <p css={titleCSS}>{jobData.title}</p>
          </div>
        </div>
        <ul css={bottomInfo}>
          <li>
            <Image
              layout="fixed"
              objectFit="contain"
              src={jobData.high ? highTrue : highFalse}
              alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"}
            />
          </li>
          <li>
            <Image
              src={jobData.college ? collegeTrue : collegeFalse}
              alt={jobData.college ? "초대졸 지원 가능" : "초대졸 지원 불가능"}
            />
          </li>
          <li>
            {jobData.placeArr[0][1]} {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
          </li>
          <li>
            {jobData.rotationArr[0]} {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
          </li>
        </ul>
      </a>
    </Link>
  );
};
