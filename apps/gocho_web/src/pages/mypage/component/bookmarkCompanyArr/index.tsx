import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { MYPAGE_URL } from "shared-constant";
import { useUserProfile } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/company";
import { CompanyCard } from "shared-ui/card/companyCard";

import { BottomPagination } from "@/component/common/molecule/bottomPagination";

import { bottomPaginationBox, cardListContainer, descCSS } from "./style";

export const BookmarkCompanyArr: FunctionComponent = () => {
  const router = useRouter();

  const { data: userData } = useUserProfile();
  const { data: userCompanyBookmarkObj, refetch } = useUserCompanyBookmarkArr({
    userId: userData?.id,
    page: Number(router.query.page),
  });

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

      {userCompanyBookmarkObj.companyBookmarkDataArr.map((data) => {
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
      })}

      <div css={bottomPaginationBox}>
        <BottomPagination totalPage={userCompanyBookmarkObj.pageResult.totalPages} linkObj={{ pathname: MYPAGE_URL }} />
      </div>
    </div>
  );
};
