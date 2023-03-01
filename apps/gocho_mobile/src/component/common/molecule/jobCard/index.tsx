import { FunctionComponent } from "react";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import { jdBookmarkEvent } from "shared-ga/jd";
import { useModal } from "@recoil/hook/modal";

import { dDayBooleanReturn } from "./util";
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
  detailInfoContainer,
  eduQual,
  detailInfo,
  taskTitle,
  taskSummary,
  taskNumber,
  taskBox,
  taskContainer,
} from "./style";

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({
  jobData,
  isBookmarked,
  userId,
  isSkeleton,
}) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isSuccess } = useUserInfo();
  const { setCurrentModal } = useModal();

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

  if (isSkeleton || !jobData) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const addJobBookmark = () => {
    if (!isSuccess) {
      setCurrentModal("loginModal", { button: "close" });
      return;
    }
    if (userId)
      addMutate(
        { userId, elemId: jobData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([{ data: "jobArr" }]);
            jdBookmarkEvent(jobData.id);
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

  const isExpired = dDayBooleanReturn(jobData.endTime);

  const savePaginationNumber = () => {
    sessionStorage.setItem("jdPageOrder", JSON.stringify(router.query.order));
    sessionStorage.setItem("jdPageNumber", JSON.stringify(router.query.page));
  };
  return (
    <article css={cardWrapper(isExpired)}>
      <button
        type="button"
        css={bookmarkButtonWrapper(isBookmarked)}
        onClick={(event) => {
          event.preventDefault();
          return isBookmarked ? deleteJobBookmark() : addJobBookmark();
        }}
        aria-label={isBookmarked ? "공고 북마크 해지" : "공고 북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>

      <a onClick={savePaginationNumber} target="_blank" rel="noreferrer" href={`${JOBS_DETAIL_URL}/${jobData.id}`}>
        <div css={dateInfoContainer}>
          <DdayBox endTime={jobData.endTime} />
          {jobData.cut && <p css={cutBox}>채용시마감</p>}
        </div>
        <div css={companyInfoContainer}>
          <div css={companyLogoWrapper}>
            <div className="Logo" css={companyLogoBox}>
              <Image fill src={jobData.companyLogo || defaultCompanyLogo} alt={jobData.companyName} />
            </div>
          </div>
          <p css={companyName}>{jobData.companyName}</p>
        </div>

        <strong css={title}>{jobData.title}</strong>

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
        </div>

        <div css={detailInfoContainer}>
          <p css={detailInfo}>
            {jobData.placeArr[0]} {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
          </p>

          <p css={detailInfo}>
            {jobData.rotationArr[0]} {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
          </p>
        </div>

        <div css={taskTitle}>
          <p css={taskSummary}>채용중인 직무</p>
          <p css={taskNumber}>{jobData.taskArr.length}</p>
        </div>
        <ul css={taskContainer}>
          {jobData.taskArr.map((task) => {
            if (task !== null) {
              return (
                <li css={taskBox} key={`${jobData.id}${task}`}>
                  {task}
                </li>
              );
            }
            return <li key={`${jobData.id}${task}`} />;
          })}
        </ul>
      </a>
    </article>
  );
};
