import { FunctionComponent } from "react";

import { useUserProfile } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { CompanyCard } from "shared-ui/card/companyCard";

import { cardListContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const { data: userData } = useUserProfile();
  const { data: userCompanyBookmarkArr, isLoading, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!userData || !userCompanyBookmarkArr || isLoading) {
    return (
      <div css={cardListContainer}>
        <p css={descCSS}>기업 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userCompanyBookmarkArr.length === 0 && (
        <p css={descCSS}>{userData.nickname} 님! 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
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
