import { FunctionComponent } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr, useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
import { useJdApplyClick, useJdCountInfo } from "shared-api/job";
import { jdBookmarkEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import { HeaderFixProps } from "./type";
import {
  applyBox,
  applyButton,
  bookmarkButton,
  companyNameCSS,
  flexBetweenBox,
  flexBox,
  headerCSS,
  dDayContainer,
  cutBox,
  titleBox,
  titleCSS,
  applyEndButton,
} from "./style";

export const HeaderFix: FunctionComponent<HeaderFixProps> = ({ jobDetailData, userId, isDdayEnd }) => {
  const queryClient = useQueryClient();
  const { data: userInfoData } = useUserProfile();
  const { setModal } = useModal();
  const router = useRouter();

  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userInfoData?.id });
  const { data: jdCountData } = useJdCountInfo({ id: Number(router.query.jobId) });

  const { mutate: mutateJdApplyClick } = useJdApplyClick();
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
    if (userId)
      addMutate(
        { userId, id: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
            jdBookmarkEvent(jobDetailData.id);
          },
        }
      );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, id: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const isBookmarked = Boolean(
    userJobBookmarkArr?.some((job) => {
      return job.id === jobDetailData.id;
    })
  );

  return (
    <header css={headerCSS}>
      <Layout>
        <div css={flexBetweenBox}>
          <div css={flexBox}>
            <div css={titleBox}>
              <p css={companyNameCSS}>{jobDetailData.company.name}</p>
              <p css={titleCSS}>{jobDetailData.title}</p>
            </div>
          </div>
          <div css={flexBox}>
            <button
              type="button"
              css={bookmarkButton(isBookmarked)}
              onClick={() => {
                if (!userInfoData) {
                  setModal("loginModal", { button: "close" });
                }
                return isBookmarked ? deleteJobBookmark() : addJobBookmark();
              }}
              aria-label={isBookmarked ? "북마크 해지" : "북마크 하기"}
            >
              <BsFillBookmarkFill />
              공고 북마크 <span> {jdCountData?.bookmarkCount}</span>
            </button>
            <div css={applyBox}>
              <div css={dDayContainer}>
                <DdayBox endTime={jobDetailData.endTime} />
                {jobDetailData.cut && <div css={cutBox}>채용시마감</div>}
              </div>
              {isDdayEnd ? (
                <p css={applyEndButton}>채용사이트</p>
              ) : (
                <a
                  href={jobDetailData.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={applyButton}
                  onClick={() => {
                    mutateJdApplyClick({ id: Number(router.query.jobId) });
                  }}
                >
                  채용사이트
                </a>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </header>
  );
};
