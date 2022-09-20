import { FunctionComponent } from "react";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { CompanyCard } from "@component/card/companyCard";

import { cardListContainer, skeletonContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr, isLoading, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!userData || !userCompanyBookmarkArr || isLoading) {
    return (
      <div css={skeletonContainer}>
        return <CompanyCard isSkeleton />;
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userCompanyBookmarkArr.length === 0 && (
        <p css={descCSS}>{userData.nickname} 님! 북마크를 이용하시면 기업공고가 더 정교해져요 😳</p>
      )}
      {userCompanyBookmarkArr.map((companyData) => {
        return (
          <CompanyCard
            key={companyData.id}
            isBookmarked
            userId={userData?.id}
            refetchUserBookmark={refetch}
            companyData={companyData}
          />
        );
      })}
    </div>
  );
};
