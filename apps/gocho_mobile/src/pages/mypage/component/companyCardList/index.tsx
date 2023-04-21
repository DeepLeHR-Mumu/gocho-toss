import { FunctionComponent, useEffect, useRef } from "react";

import { useUserProfile } from "shared-api/auth";
import { useInfiniteUserCompanyBookmarkArr } from "shared-api/company";
import { dummyArrCreator } from "shared-util";
import { CompanyCard } from "shared-ui/card/companyCard";

import { listContainer } from "./style";

export const CompanyCardList: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);

  const { data: userInfoData } = useUserProfile();
  const {
    data: userBookmarkCompanyData,
    refetch,
    fetchNextPage,
  } = useInfiniteUserCompanyBookmarkArr({
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
  }, [fetchNextPage, userBookmarkCompanyData]);

  if (!userBookmarkCompanyData) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(6).map((dummy) => {
          return <CompanyCard isSkeleton key={`UnifiedSearchCompanyCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {userBookmarkCompanyData?.pages.map((page) => {
        return page.userCompanyBookmarkArr.map((data) => {
          return (
            <CompanyCard
              companyData={{
                ...data,
                isBookmark: true,
              }}
              refetchUserCompanyBookmark={refetch}
              key={`UnifiedSearchCompanyCard${data.id}`}
            />
          );
        });
      })}

      <div ref={observeRef} />
    </section>
  );
};
