import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useJdBookmarkToggle } from "shared-api/job";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import highTrue from "shared-image/global/common/go_color.svg";
import highFalse from "shared-image/global/common/go_mono.svg";
import collegeTrue from "shared-image/global/common/cho_color.svg";
import collegeFalse from "shared-image/global/common/cho_mono.svg";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { JOBS_DETAIL_URL } from "shared-constant";
import { dateConverter } from "shared-util";
import { jdBookmarkEvent } from "shared-ga/jd";
import { useUserProfile } from "shared-api/auth";

import { useModal } from "@/globalStates";

import { dDayBooleanReturn } from "./util";
import { JobCardProps, JobCardSkeleton } from "./type";
import {
  jobCardSkeleton,
  jobDetailLink,
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
  taskArrCSS,
} from "./style";

export const JobCard: FunctionComponent<JobCardProps | JobCardSkeleton> = ({ jobData, isSkeleton }) => {
  const router = useRouter();
  const { isSuccess, data: userInfoData } = useUserProfile();
  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();
  const { setModal } = useModal();

  if (isSkeleton || !jobData) {
    return (
      <div css={jobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const jobBookmarkHandler = () => {
    if (!userInfoData || !isSuccess) {
      setModal("loginModal", { button: "close" });
      return;
    }

    jdBookmarkEvent(jobData.id);
    jdBookmarkToggle({ jdId: jobData.id });
  };

  const { date: jobStartTime } = dateConverter(jobData.startTime);
  const { date: jobEndTime, year: jobEndYear } = dateConverter(jobData.endTime);

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
        aria-label={jobData.isBookmark ? "북마크 해지" : "북마크 하기"}
      >
        <BsFillBookmarkFill />
        <span css={bookmarkNumber}>{jobData.bookmark}</span>
      </button>

      <a
        target="_blank"
        css={jobDetailLink}
        href={`${JOBS_DETAIL_URL}/${jobData.id}`}
        onClick={savePaginationNumber}
        rel="noreferrer"
      >
        <p css={viewWrapper}>
          <FiEye />
          <span css={viewNumber}>{jobData.view.toLocaleString("Ko-KR")}</span>
        </p>

        <div css={mainContainer}>
          <div css={companyLogoWrapper} className="Logo">
            <div css={companyLogoBox}>
              <Image fill src={jobData.company.logoUrl || defaultCompanyLogo} alt={jobData.company.logoUrl} sizes="1" />
            </div>
          </div>
          <div css={infoBox}>
            <div css={dateInfoContainer}>
              <p css={date}>{jobEndYear === "9999" ? `${jobStartTime}` : `${jobStartTime}~${jobEndTime}`}</p>
              <DdayBox endTime={jobData.endTime} />
              {jobData.cut && <div css={cutBox}>채용시마감</div>}
            </div>
            <p css={companyName}>{jobData.company.name}</p>
            <strong css={titleCSS}>{jobData.title}</strong>
            <ul css={detailInfoContainer}>
              <li css={eduQual}>
                <Image
                  src={jobData.high ? highTrue : highFalse}
                  alt={jobData.high ? "고졸 지원 가능" : "고졸 지원 불가능"}
                />
              </li>
              <li css={eduQual}>
                <Image
                  src={jobData.college ? collegeTrue : collegeFalse}
                  alt={jobData.college ? "초대졸 지원 가능" : "초대졸 지원 불가능"}
                />
              </li>
              <li css={detailInfo}>
                {jobData.placeArr[0] && jobData.placeArr[0].split(" ").slice(0, 2).join(" ")}{" "}
                {jobData.placeArr.length !== 1 && `외 ${jobData.placeArr.length - 1}곳`}
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
            <span css={taskNumber(isExpired)}>{jobData.positionCount}</span>
          </p>
          <div css={taskBox} key={`${jobData.id}${jobData.task}`}>
            {jobData.task}
          </div>
        </div>

        <p css={hoverButton} className="hoverButton">
          공고보기
        </p>
      </a>
    </article>
  );
};
