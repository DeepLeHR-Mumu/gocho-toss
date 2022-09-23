import { FunctionComponent } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { Layout } from "@component/layout";
import { JOBS_LIST_URL } from "shared-constant/internalURL";

import { useAddUserBookmark, useDeleteUserBookmark } from "shared-api/bookmark";
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

export const HeaderFix: FunctionComponent<HeaderFixProps> = ({
  jobDetailData,
  isBookmarked,
  userId,
  refetchUserBookmark,
}) => {
  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  const addJobBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, likeType: "jd-bookmarks", elemId: jobDetailData.id },
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
        { userId, likeType: "jd-bookmarks", elemId: jobDetailData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
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
              <a css={goBackButton} aria-label="이전 페이지 이동">
                <FiArrowLeft />
              </a>
            </Link>
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
          </div>
        </div>
      </Layout>
    </header>
  );
};
