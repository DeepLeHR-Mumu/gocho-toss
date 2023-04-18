import { FunctionComponent } from "react";

import { useUserProfile } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/company";
import { CompanyCard } from "shared-ui/card/companyCard";

import { cardListContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const { data: userData } = useUserProfile();
  const { data: userCompanyBookmarkObj, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!userCompanyBookmarkObj) {
    return (
      <div css={cardListContainer}>
        <p css={descCSS}>기업 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userCompanyBookmarkObj.pageResult.totalElements === 0 && (
        <p css={descCSS}>{userData?.nickname} 님! 북마크를 이용하시면 추천기업이 더 정교해져요 😳</p>
      )}
      {userCompanyBookmarkObj.companyBookmarkDataArr.map((companyData) => {
        return <CompanyCard key={companyData.id} refetchUserBookmark={refetch} companyData={companyData} />;
      })}
    </div>
  );
};
