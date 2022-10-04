import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
import { DdayBox } from "shared-ui/common/atom/dDayBox";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { dateConverter } from "shared-util/date";

import { dDayBooleanReturn } from "./util";
import { JobCardProps, JobCardSkeleton } from "./type";
import {
  jobCardSkeleton,
  cardWrapper,
  bookmarkButtonWrapper,
  bookmarkNumber,
  viewWrapper,
  viewNumber,
  mainContainer,
  companyLogoWrapper,
  companyLogoBox,
  dateInfoContainer,
  date,
  cutBox,
  companyName,
  titleCSS,
  detailInfoContainer,
  eduQual,
  detailInfo,
  taskContainer,
  taskSummary,
  taskNumber,
  taskBox,
  hoverButton,
  infoBox,
} from "./style";

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({
  jobData,
  isBookmarked,
  userId,
  isSkeleton,
}) => {
  const [imageSrc, setImageSrc] = useState(jobData?.companyLogo as string);

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

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobData.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobData.endTime);

  const isExpired = dDayBooleanReturn(jobData.endTime);

  return (
    <article css={cardWrapper(isExpired)}>
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
        <span css={bookmarkNumber}>{jobData.bookmark}</span>
      </button>

      <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref>
        <a>
          <p css={viewWrapper}>
            <FiEye />
            <span css={viewNumber}>{jobData.view}</span>
          </p>

          <div css={mainContainer}>
            <div css={companyLogoWrapper} className="Logo">
              <div css={companyLogoBox}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={imageSrc}
                  alt={jobData.companyName}
                  onError={() => {
                    return setImageSrc(defaultCompanyLogo);
                  }}
                />
              </div>
            </div>
            <div css={infoBox}>
              <div css={dateInfoContainer}>
                <p css={date}>
                  {endYear === 9999
                    ? `${startYear}.${startMonth}.${startDate}`
                    : `${startYear}.${startMonth}.${startDate}~${endYear}.${endMonth}.${endDate}`}
                </p>
                <DdayBox endTime={jobData.endTime} />
                {jobData.cut && <div css={cutBox}>채용시마감</div>}
              </div>
              <p css={companyName}>{jobData.companyName}</p>
              <strong css={titleCSS}>{jobData.title}</strong>
              <ul css={detailInfoContainer}>
                <li css={eduQual}>
                  <Image
                    src={jobData.high ? highTrue : highFalse}
                    alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"}
                    layout="fixed"
                    objectFit="cover"
                  />
                </li>
                <li css={eduQual}>
                  <Image
                    src={jobData.college ? collegeTrue : collegeFalse}
                    alt={jobData.college ? "초대졸 지원 가능" : "초대졸 지원 불가능"}
                    layout="fixed"
                    objectFit="cover"
                  />
                </li>
                <li css={detailInfo}>
                  {jobData.placeArr[0][1]} {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
                </li>

                <li css={detailInfo}>
                  {jobData.rotationArr[0]}{" "}
                  {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
                </li>
              </ul>
            </div>
          </div>

          <div css={taskContainer}>
            <p css={taskSummary(isExpired)}>
              채용중인 직무
              <span css={taskNumber(isExpired)}>{jobData.taskArr.length}</span>
            </p>
            {jobData.taskArr.map((task) => {
              return (
                <div css={taskBox} key={`${jobData.id}${task}`}>
                  {task}
                </div>
              );
            })}
          </div>

          <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref>
            <a css={hoverButton} className="hoverButton">
              공고보기
            </a>
          </Link>
        </a>
      </Link>
    </article>
  );
};
