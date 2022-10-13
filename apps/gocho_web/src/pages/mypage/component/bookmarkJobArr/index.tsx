import { FunctionComponent } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";

import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { cardListContainer, skeletonContainer, desc, warningCSS } from "./style";

export const BookmarkJobArr: FunctionComponent = () => {
  const { data: userData } = useUserInfo();

  const { data: userJobBookmarkArrData, isLoading } = useUserJobBookmarkArr({
    userId: userData?.id,
  });

  if (!userData || isLoading) {
    return (
      <div css={skeletonContainer}>
        {dummyArrCreator(4).map((value) => {
          return <BookmarkedJobCard isSkeleton key={`BookmarkedJobCardSkeleton${value}`} />;
        })}
      </div>
    );
  }

  if (!userJobBookmarkArrData) {
    return (
      <div css={cardListContainer}>
        <p css={warningCSS}>공고 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userJobBookmarkArrData.length === 0 && (
        <p css={desc}>{userData.nickname} 님! 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      )}
      {userJobBookmarkArrData.map((job) => {
        return <BookmarkedJobCard isMobile={false} key={job.id} jobData={job} isBookmarked userId={userData?.id} />;
      })}
    </div>
  );
};
