import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useAddUserBookmark, useDeleteUserBookmark } from "shared-api/bookmark";
import { DdayBox } from "shared-ui/common/atom/dDayBox";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { dateConverter } from "shared-util/date";

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

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobData.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobData.endTime);

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
            <span css={bookmarkNumber}>{jobData.bookmark}</span>
          </button>
          <div css={viewWrapper}>
            <FiEye />
            <span css={viewNumber}>{jobData.view}</span>
          </div>

          <div css={mainContainer}>
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
            <div>
              <div css={dateInfoContainer}>
                <div css={date}>
                  {endYear === 9999
                    ? `${startYear}/${startMonth}/${startDate}`
                    : `${startYear}/${startMonth}/${startDate}~${endYear}/${endMonth}/${endDate}`}
                </div>
                <DdayBox endTime={jobData.endTime} />
                {jobData.cut && <div css={cutBox}>채용시 마감</div>}
              </div>
              <div css={companyName}>{jobData.companyName}</div>
              <h2 css={titleCSS}>{jobData.title}</h2>
              <div css={detailInfoContainer}>
                <div css={eduQual}>
                  <Image
                    src={jobData.high ? highTrue : highFalse}
                    alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"}
                  />
                </div>
                <div css={eduQual}>
                  <Image
                    src={jobData.college ? collegeTrue : collegeFalse}
                    alt={jobData.college ? "초대졸 지원 가능" : "초대졸 지원 불가능"}
                  />
                </div>
                <div css={detailInfo}>
                  {jobData.placeArr[0][1]} {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
                </div>

                <div css={detailInfo}>
                  {jobData.rotationArr[0]}{" "}
                  {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
                </div>
              </div>
            </div>
          </div>

          <div css={taskContainer}>
            <div css={taskSummary}>
              채용중인 직무
              <span css={taskNumber}>{jobData.taskArr.length}</span>
            </div>
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
