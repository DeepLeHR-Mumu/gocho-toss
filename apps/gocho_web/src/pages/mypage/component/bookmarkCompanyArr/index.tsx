import { FunctionComponent } from "react";

import { CompanyCard } from "@component/card/companyCard";

import { useUserInfo } from "@api/auth";
import { useUserCompanyBookmarkArr } from "@api/bookmark";

import { cardListContainer, skeletonContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const { data: userInfoData } = useUserInfo();

  const {
    data: userCompanyBookmarkArrData,
    isLoading,
    isError,
  } = useUserCompanyBookmarkArr({
    userId: userInfoData?.id,
  });

  if (!userInfoData || !userCompanyBookmarkArrData || isError || isLoading) {
    return (
      <div css={skeletonContainer}>
        return <CompanyCard isSkeleton />;
      </div>
    );
  }

  return (
    <div css={cardListContainer}>
      {userCompanyBookmarkArrData.length === 0 && (
        <p css={descCSS}>{userInfoData.nickname} 님! 북마크를 이용하시면 기업공고가 더 정교해져요 😳</p>
      )}
      {userCompanyBookmarkArrData.map((companyData) => {
        return <CompanyCard key={companyData.id} isBookmarked companyData={companyData} />;
      })}
    </div>
  );
};
