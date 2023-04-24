import { FunctionComponent, useRef, useEffect } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";

import { useInfiniteUserJobBookmarkArr } from "shared-api/job";
import { useUserProfile } from "shared-api/auth";
import { dummyArrCreator } from "shared-util";

import { cardListContainer, skeletonContainer, desc, warningCSS } from "./style";

export const BookmarkJobArr: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);

  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArrData, fetchNextPage } = useInfiniteUserJobBookmarkArr({
    userId: userData?.id,
  });

  useEffect(() => {
    if (observeRef.current) {
      const observer = new IntersectionObserver(
        (entry) => {
          if (entry[0].isIntersecting) fetchNextPage();
        },
        { threshold: 0.2 }
      );
      observer.observe(observeRef.current);
    }
  }, [fetchNextPage, userJobBookmarkArrData]);

  if (!userData) {
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
      {userJobBookmarkArrData.pages[0].pageResult.totalElements === 0 && (
        <p css={desc}>{userData.nickname} 님! 북마크를 이용하시면 추천공고가 더 정교해져요 😳</p>
      )}

      {userJobBookmarkArrData.pages.map((page) => {
        return page.userJobBookmarkArr.map((data) => {
          return <BookmarkedJobCard isMobile={false} key={data.id} jobData={data} isBookmarked />;
        });
      })}
      <div ref={observeRef} />
    </div>
  );
};
