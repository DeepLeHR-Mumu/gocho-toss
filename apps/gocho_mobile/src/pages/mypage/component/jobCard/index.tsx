import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useAddUserBookmark, useDeleteUserBookmark } from "shared-api/bookmark";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { DdayBox } from "shared-ui/common/atom/dDayBox";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { JobCardProps, JobCardSkeleton } from "./type";
import {
  jobCardSkeleton,
  cardWrapper,
  bookmarkButtonWrapper,
  companyLogoWrapper,
  companyLogoBox,
  dateInfoContainer,
  cutBox,
  companyInfoContainer,
  companyName,
  title,
} from "./style";

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({
  jobData,
  isBookmarked,
  userId,
  isSkeleton,
  refetchUserBookmark,
}) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);

  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const addJobBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, likeType: "jd-bookmarks", elemId: jobData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
          },
        }
      )
    );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, likeType: "jd-bookmarks", elemId: jobData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
          },
        }
      )
    );
  };

  const today = new Date();
  const isExpired = jobData.endTime - Number(today) < 0;

  return (
    <article css={cardWrapper(isExpired)}>
      <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref>
        <a>
          <button
            type="button"
            css={bookmarkButtonWrapper(isBookmarked)}
            onClick={(event) => {
              event.preventDefault();
              return isBookmarked ? deleteJobBookmark() : addJobBookmark();
            }}
          >
            <BsFillBookmarkFill />
          </button>

          <div css={dateInfoContainer}>
            <DdayBox endTime={jobData.endTime} />
            {jobData.cut && <div css={cutBox}>채용시 마감</div>}
          </div>
          <div css={companyInfoContainer}>
            <div css={companyLogoWrapper}>
              <div className="Logo" css={companyLogoBox}>
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
            </div>
            <div css={companyName}>{jobData.companyName}</div>
          </div>

          <h2 css={title}>{jobData.title}</h2>
        </a>
      </Link>
    </article>
  );
};
