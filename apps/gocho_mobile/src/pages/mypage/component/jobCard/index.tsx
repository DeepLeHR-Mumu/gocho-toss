import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";

import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
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
}) => {
  const queryClient = useQueryClient();

  const { mutate: addMutate } = useAddJobBookmarkArr({
    id: jobData?.id as number,
    end_time: jobData?.endTime as number,
    title: jobData?.title as string,
    cut: jobData?.cut as boolean,
    company: {
      name: jobData?.companyName as string,
      logo_url: jobData?.companyLogo as string,
    },
  });

  const { mutate: deleteMutate } = useDeleteJobBookmarkArr({
    id: jobData?.id as number,
    end_time: jobData?.endTime as number,
    title: jobData?.title as string,
    cut: jobData?.cut as boolean,
    company: {
      name: jobData?.companyName as string,
      logo_url: jobData?.companyLogo as string,
    },
  });

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (isSkeleton || jobData === undefined) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const addJobBookmark = () => {
    if (userId)
      addMutate(
        { userId, elemId: jobData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([{ data: "jobArr" }]);
          },
        }
      );
  };

  const deleteJobBookmark = () => {
    if (userId)
      deleteMutate(
        { userId, elemId: jobData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([{ data: "jobArr" }]);
          },
        }
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
            aria-label={isBookmarked ? "북마크 해지" : "북마크 하기"}
          >
            <BsFillBookmarkFill />
          </button>

          <div css={dateInfoContainer}>
            <DdayBox endTime={jobData.endTime} />
            {jobData.cut && <div css={cutBox}>채용시마감</div>}
          </div>
          <div css={companyInfoContainer}>
            <div css={companyLogoWrapper}>
              <div className="Logo" css={companyLogoBox}>
                <Image layout="fill" objectFit="contain" src={jobData.companyLogo || defaultCompanyLogo} alt="" />
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
