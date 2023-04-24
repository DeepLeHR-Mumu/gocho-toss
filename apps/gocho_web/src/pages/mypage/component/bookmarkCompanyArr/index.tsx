import { FunctionComponent, useRef, useEffect } from "react";

import { useUserProfile } from "shared-api/auth";
import { useInfiniteUserCompanyBookmarkArr } from "shared-api/company";
import { CompanyCard } from "shared-ui/card/companyCard";

import { cardListContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);

  const { data: userData } = useUserProfile();
  const {
    data: userCompanyBookmarkObj,
    refetch,
    fetchNextPage,
  } = useInfiniteUserCompanyBookmarkArr({ userId: userData?.id });

  useEffect(() => {
    if (observeRef.current && userCompanyBookmarkObj?.pages[0].pageResult.totalElements !== 0) {
      const observer = new IntersectionObserver(
        (entry) => {
          if (entry[0].isIntersecting) fetchNextPage();
        },
        { threshold: 0.2 }
      );
      observer.observe(observeRef.current);
    }
  }, [fetchNextPage, userCompanyBookmarkObj]);

  if (!userCompanyBookmarkObj) {
    return (
      <div css={cardListContainer}>
        <p css={descCSS}>기업 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
      </div>
    );
  }
  return (
    <div css={cardListContainer}>
      {userCompanyBookmarkObj.pages[0].pageResult.totalElements === 0 && (
        <p css={descCSS}>{userData?.nickname} 님! 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
      )}

      {userCompanyBookmarkObj.pages.map((page) => {
        return page.userCompanyBookmarkArr.map((data) => {
          return (
            <CompanyCard
              key={data.id}
              refetchUserCompanyBookmark={refetch}
              companyData={{
                ...data,
                isBookmark: true,
              }}
            />
          );
        });
      })}
      <div ref={observeRef} />
    </div>
  );
};
