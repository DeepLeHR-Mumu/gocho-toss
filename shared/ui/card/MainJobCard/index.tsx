import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";

import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant";
import { useUserProfile } from "shared-api/auth";
import { useJdBookmarkToggle } from "shared-api/job";
import { jdBookmarkEvent } from "shared-ga/jd";

import { SkeletonBox } from "../../common/atom/skeletonBox";
import { DdayBox } from "../../common/atom/dDayBox";

import {
  cardWrapper,
  companyLogoBox,
  titleCSS,
  jobCardSkeleton,
  bookmarkButton,
  labelContainer,
  cutBox,
  flexBox,
  infoBox,
  companyNameCSS,
  bottomInfo,
} from "./style";
import { MainJobCardProps, MainJobCardSkeleton } from "./type";

export const MainJobCard: FunctionComponent<MainJobCardProps | MainJobCardSkeleton> = ({
  jobData,
  isSkeleton,
  isMobile,
  loginOpener,
}) => {
  const { error: useUserInfoError, data: userInfoData } = useUserProfile();
  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const jobBookmarkHandler = () => {
    if (userInfoData) {
      jdBookmarkEvent(jobData.id);
      jdBookmarkToggle({ jdId: jobData.id });
    }
  };

  return (
    <Link
      href={`${JOBS_DETAIL_URL}/${jobData.id}`}
      passHref
      css={cardWrapper(isMobile)}
      aria-label={`${jobData.title} 채용 공고로 이동`}
    >
      <button
        type="button"
        css={bookmarkButton(jobData.isBookmark)}
        onClick={(event) => {
          event.preventDefault();
          if (useUserInfoError) {
            return loginOpener();
          }
          return jobBookmarkHandler();
        }}
        aria-label={jobData.isBookmark ? "북마크 해지" : "북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>

      <div css={labelContainer}>
        <DdayBox endTime={jobData.endTime} />
        {jobData.cut && <div css={cutBox}>채용시마감</div>}
      </div>

      <div css={flexBox}>
        <div css={companyLogoBox}>
          <Image fill src={jobData.company.logoUrl || defaultCompanyLogo} alt="" sizes="1" />
        </div>

        <div css={infoBox}>
          <p css={companyNameCSS}>{jobData.company.name}</p>
          <p css={titleCSS}>{jobData.title}</p>
        </div>
      </div>

      <ul css={bottomInfo}>
        <li>
          <Image src={jobData.high ? highTrue : highFalse} alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"} />
        </li>
        <li>
          <Image
            src={jobData.college ? collegeTrue : collegeFalse}
            alt={jobData.college ? "초대졸 지원 가능" : "초대졸 지원 불가능"}
          />
        </li>
        <li>
          {jobData.placeArr[0]} {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
        </li>
        <li>
          {jobData.rotationArr[0]} {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
        </li>
      </ul>
    </Link>
  );
};
