import { FunctionComponent } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";

import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { cardListContainer, skeletonContainer, desc } from "./style";

export const BookmarkJobArr: FunctionComponent = () => {
  const { data: userData } = useUserInfo();

  const {
    data: userJobBookmarkArrData,
    isLoading,
    isError,
  } = useUserJobBookmarkArr({
    userId: userData?.id,
  });

  if (!userData || !userJobBookmarkArrData || isError || isLoading) {
    return (
      <div css={skeletonContainer}>
        {dummyArrCreator(4).map((value) => {
          return <BookmarkedJobCard isSkeleton key={`BookmarkedJobCardSkeleton${value}`} />;
        })}
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userJobBookmarkArrData.length === 0 && (
        <p css={desc}>{userData.nickname} 님! 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      )}
      {userJobBookmarkArrData.map((job) => {
        return <BookmarkedJobCard key={job.id} jobData={job} isMobile={false} isBookmarked userId={userData?.id} />;
      })}
    </div>
  );
};
