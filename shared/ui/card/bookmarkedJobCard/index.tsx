import { FunctionComponent } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant";

import { useJdBookmarkToggle } from "shared-api/job";

import { SkeletonBox } from "../../common/atom/skeletonBox";
import { DdayBox } from "../../common/atom/dDayBox";
import { BookmarkedJobCardSkeleton, BookmarkedJobCardProps } from "./type";
import {
  jobCardSkeleton,
  cardWrapper,
  companyLogoBox,
  companyName,
  jobInfoBox,
  flexBox,
  cutBox,
  title,
  bookmarkButton,
  linkButtonCSS,
} from "./style";

export const BookmarkedJobCard: FunctionComponent<BookmarkedJobCardProps | BookmarkedJobCardSkeleton> = ({
  jobData,
  isMobile,
  isBookmarked,
  isSkeleton,
}) => {
  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const jdBookmarkToggleHandler = () => {
    jdBookmarkToggle({ jdId: jobData.id });
  };

  return (
    <article css={cardWrapper}>
      <button
        type="button"
        css={bookmarkButton(isBookmarked)}
        onClick={jdBookmarkToggleHandler}
        aria-label={isBookmarked ? "북마크 해지" : "북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>
      <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref css={linkButtonCSS(isMobile)}>
        <div css={companyLogoBox}>
          <Image src={jobData.companyLogo || defaultCompanyLogo} alt={`${jobData.companyName}의 로고`} fill sizes="1" />
        </div>
        <div css={jobInfoBox(isMobile)}>
          <div css={flexBox}>
            <DdayBox endTime={jobData.endTime} />
            {jobData.cut && <div css={cutBox}>채용시마감</div>}
          </div>
          <p css={companyName}>{jobData.companyName}</p>
          <p css={title}>{jobData.title}</p>
        </div>
      </Link>
    </article>
  );
};
