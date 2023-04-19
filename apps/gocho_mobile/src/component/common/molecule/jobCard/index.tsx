import { FunctionComponent } from "react";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useUserProfile } from "shared-api/auth";
import { useJdBookmarkToggle } from "shared-api/job";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { JOBS_DETAIL_URL } from "shared-constant";
import { jdBookmarkEvent } from "shared-ga/jd";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";

import { useModal } from "@/globalStates";

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

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({ jobData, isSkeleton }) => {
  const router = useRouter();

  const { data: userInfoData } = useUserProfile();
  const { mutate: jobBookmarkToggle } = useJdBookmarkToggle();
  const { setModal } = useModal();

  if (isSkeleton || !jobData) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const jobBookmarkHandler = () => {
    if (!userInfoData) {
      setModal("loginModal", { button: "close" });
      return;
    }

    jdBookmarkEvent(jobData.id);
    jobBookmarkToggle({ jdId: jobData.id });
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
        css={bookmarkButtonWrapper(jobData.isBookmark)}
        onClick={jobBookmarkHandler}
        aria-label={jobData.isBookmark ? "공고 북마크 해지" : "공고 북마크 하기"}
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
              <Image fill src={jobData.company.logoUrl || defaultCompanyLogo} alt={jobData.company.name} />
            </div>
          </div>
          <p css={companyName}>{jobData.company.name}</p>
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
            {jobData.placeArr[0] && jobData.placeArr[0].split(" ").slice(0, 2).join(" ")}{" "}
            {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
          </p>

          <p css={detailInfo}>
            {jobData.rotationArr[0]} {jobData.rotationArr.length !== 1 && `외 ${jobData.rotationArr.length - 1}형태`}
          </p>
        </div>

        <div css={taskTitle}>
          <p css={taskSummary}>채용중인 직무</p>
          <p css={taskNumber}>{jobData.positionCount}</p>
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
