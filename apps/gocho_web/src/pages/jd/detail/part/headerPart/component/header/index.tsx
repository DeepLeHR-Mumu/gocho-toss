import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube, FiEye } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util";
import { jdCountInfoKeyObj } from "shared-constant/queryKeyFactory/job/jdCountInfoKeyObj";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { useAddJobBookmarkArr, useDeleteJobBookmarkArr, useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserProfile } from "shared-api/auth";
import { useJdApplyClick, useJdCountInfo } from "shared-api/job";
import { jdBookmarkEvent } from "shared-ga/jd";

import { useModal } from "@/globalStates";

import { HeaderProps } from "./type";
import {
  applyButton,
  buttonCSS,
  youtubeButton,
  companyNameCSS,
  dateBox,
  dateCSS,
  cutBox,
  headerCSS,
  imageBox,
  linksCSS,
  titleCSS,
  viewCSS,
  applyEndButton,
} from "./style";

export const Header: FunctionComponent<HeaderProps> = ({ jobDetailData, userId, isDdayEnd }) => {
  const queryClient = useQueryClient();
  const { data: userInfoData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userInfoData?.id });
  const { setModal } = useModal();
  const router = useRouter();

  const { mutate: mutateJdApplyClick } = useJdApplyClick();
  const { data: jdCountData } = useJdCountInfo({ id: Number(router.query.jobId) });
  const { mutate: addMutate } = useAddJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const { mutate: deleteMutate } = useDeleteJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const addJobBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, id: jobDetailData.id },
        {
          onSuccess: () => {
            jdBookmarkEvent(jobDetailData.id);
            queryClient.invalidateQueries(jdCountInfoKeyObj.countInfo({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, id: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jdCountInfoKeyObj.countInfo({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobDetailData.startTime);

  const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobDetailData.endTime);

  const isBookmarked = Boolean(
    userJobBookmarkArr?.some((job) => {
      return job.id === jobDetailData.id;
    })
  );

  return (
    <header css={headerCSS}>
      <div css={imageBox}>
        <Image alt="" fill sizes="1" src={jobDetailData.company.logoUrl || defaultCompanyLogo} />
      </div>
      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>{jobDetailData.cut && <div css={cutBox}>채용시마감</div>}</li>
          <li>
            <p css={dateCSS}>
              {`${startYear}. ${startMonth}. ${startDate}`} ~{" "}
              {endYear !== 9999 && `${endYear}. ${endMonth}. ${endDate}`}
            </p>
          </li>
        </ul>{" "}
        <Link href={`/company/${jobDetailData.company.companyId}/detail`} passHref css={companyNameCSS}>
          {jobDetailData.company.name}
        </Link>
        <p css={titleCSS}>{jobDetailData.title}</p>
        <ul css={linksCSS}>
          <li>
            {isDdayEnd ? (
              <p css={applyEndButton}>채용사이트</p>
            ) : (
              <a
                href={jobDetailData.applyUrl}
                target="_blank"
                css={applyButton}
                rel="noopener noreferrer"
                onClick={() => {
                  mutateJdApplyClick({ id: Number(router.query.jobId) });
                }}
              >
                채용사이트
              </a>
            )}
          </li>
          <li>
            <button
              type="button"
              css={buttonCSS(isBookmarked)}
              onClick={() => {
                if (!userInfoData) {
                  setModal("loginModal", { button: "close" });
                }
                return isBookmarked ? deleteJobBookmark() : addJobBookmark();
              }}
            >
              <BsFillBookmarkFill />
              공고 북마크 {jdCountData?.bookmarkCount}
            </button>
          </li>
          <li>
            <Link href={`/company/${jobDetailData.company.companyId}/detail`} passHref css={buttonCSS(false)}>
              기업정보
            </Link>
          </li>
          {jobDetailData.company.youtubeUrl && (
            <li>
              <a href={jobDetailData.company.youtubeUrl} target="_blank" rel="noopener noreferrer" css={youtubeButton}>
                <FiYoutube />
              </a>
            </li>
          )}
        </ul>
        <p css={viewCSS}>
          <FiEye /> {jdCountData?.viewCount.toLocaleString("ko-KR")}
        </p>
      </div>
    </header>
  );
};
