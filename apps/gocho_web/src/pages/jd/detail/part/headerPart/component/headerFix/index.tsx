import { FunctionComponent } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";

import { Profile } from "@component/common/molecule/profile";
import { UnAuthMenu } from "@component/common/molecule/unAuthMenu";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { Layout } from "@component/layout";
import { JOBS_LIST_URL } from "@constant/internalURL";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { useUserInfo } from "shared-api/auth";

import { useAddUserJobBookmarkArr, useDeleteUserJobBookmark } from "shared-api/bookmark";
import { HeaderFixProps } from "./type";
import {
  applyBox,
  applyButton,
  bookmarkButton,
  companyNameCSS,
  flexBetweenBox,
  flexBox,
  goBackButton,
  headerCSS,
  dDayContainer,
  titleBox,
  titleCSS,
} from "./style";

export const HeaderFix: FunctionComponent<HeaderFixProps> = ({ jobDetailData, isBookmarked, userId }) => {
  const queryClient = useQueryClient();

  const { isSuccess } = useUserInfo();
  const { mutate: addMutate } = useAddUserJobBookmarkArr({
    id: jobDetailData?.id as number,
    title: jobDetailData?.title as string,
    end_time: jobDetailData?.endTime as number,
    company: { id: jobDetailData.company?.companyId as number, name: jobDetailData?.company.name as string },
  });
  const { mutate: deleteMutate } = useDeleteUserJobBookmark({
    id: jobDetailData?.id as number,
    title: jobDetailData?.title as string,
    end_time: jobDetailData?.endTime as number,
    company: { id: jobDetailData.company?.companyId as number, name: jobDetailData?.company.name as string },
  });

  const addJobBookmark = () => {
    if (userId)
      addMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  return (
    <header css={headerCSS}>
      <Layout>
        <div css={flexBetweenBox}>
          <div css={flexBox}>
            <Link href={JOBS_LIST_URL} passHref>
              <a css={goBackButton}>
                <FiArrowLeft />
              </a>
            </Link>
            <div css={titleBox}>
              <p css={companyNameCSS}>{jobDetailData.company.name}</p>
              <h2 css={titleCSS}>{jobDetailData.title}</h2>
            </div>
          </div>
          <div css={flexBox}>
            <button
              type="button"
              css={bookmarkButton(isBookmarked)}
              onClick={() => {
                return isBookmarked ? deleteJobBookmark() : addJobBookmark();
              }}
            >
              <BsFillBookmarkFill />
              공고 북마크 <span> {jobDetailData.bookmarkCount}</span>
            </button>
            <div css={applyBox}>
              <div css={dDayContainer}>
                <DdayBox endTime={jobDetailData.endTime} />
              </div>
              <a href={jobDetailData.applyUrl} target="_blank" rel="noopener noreferrer" css={applyButton}>
                채용사이트
              </a>
            </div>
            {isSuccess ? <Profile /> : <UnAuthMenu />}
          </div>
        </div>
      </Layout>
    </header>
  );
};
