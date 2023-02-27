import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";

import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
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

export const JobSmallCard: FunctionComponent<JobSmallCardProps | JobSmallCardSkeleton> = ({
  userId,
  isBookmarked,
  jobData,
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

  const addJobBookmark = () => {
    if (userId)
      addMutate(
        { userId, id: jobData.id },
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
        { userId, id: jobData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([{ data: "jobArr" }]);
          },
        }
      );
  };

  return (
    <div css={cardWrapper}>
      <button
        type="button"
        onClick={isBookmarked ? deleteJobBookmark : addJobBookmark}
        css={bookmarkButtonCSS(isBookmarked)}
        aria-label={`${jobData.companyName} 북마크하기`}
      >
        <BsFillBookmarkFill />
      </button>

      <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref aria-label={`${jobData.title} 채용 공고로 이동`}>
        <div css={flexBox}>
          <div css={companyLogoBox}>
            <Image fill src={jobData.companyLogo || defaultCompanyLogo} alt="" />
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
              fill
              src={jobData.high ? highTrue : highFalse}
              alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"}
            />
          </li>
          <li>
            <Image
              fill
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
      </Link>
    </div>
  );
};
