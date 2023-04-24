import { FunctionComponent, useEffect, useRef } from "react";

import { BookmarkedJobCard } from "shared-ui/card/bookmarkedJobCard";
import { useInfiniteUserJobBookmarkArr } from "shared-api/job";
import { useUserProfile } from "shared-api/auth";

import { listContainer } from "./style";

export const JobCardList: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);

  const { data: userInfoData } = useUserProfile();
  const { data: userBookmarkJobData, fetchNextPage } = useInfiniteUserJobBookmarkArr({
    userId: userInfoData?.id,
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
  }, [fetchNextPage, userBookmarkJobData]);

  return (
    <section css={listContainer}>
      {userBookmarkJobData?.pages.map((page) => {
        return page.userJobBookmarkArr.map((data) => {
          return <BookmarkedJobCard isMobile jobData={data} isBookmarked key={`UnifiedSearchJobCard${data.id}`} />;
        });
      })}
      <div ref={observeRef} />
    </section>
  );
};
