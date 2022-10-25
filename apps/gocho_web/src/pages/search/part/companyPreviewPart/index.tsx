import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { CompanyCard } from "shared-ui/card/companyCard";
import { NormalButton } from "shared-ui/common/atom/button";
import { COLORS } from "shared-style/color";
import { useUnifiedCompanySearchArr } from "shared-api/company";

import { buttonBox, listContainer, noDataText } from "./style";

export const CompanyPreviewPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: userData } = useUserInfo();
  const { data: companyDataArr, isLoading: isCompanyDataArrLoading } = useUnifiedCompanySearchArr({
    searchWord: router.query.q,
    offset: router.query.page,
  });
  const { data: userCompanyBookmarkArr, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!companyDataArr || isCompanyDataArrLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(6).map((dummy) => {
          return <CompanyCard isSkeleton key={`UnifiedSearchCompanyCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (companyDataArr.count === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {companyDataArr.companyDataArr.slice(0, 6).map((companyData) => {
        const isBookmarked = Boolean(
          userCompanyBookmarkArr?.some((company) => {
            return company.id === companyData.id;
          })
        );
        return (
          <CompanyCard
            companyData={companyData}
            isBookmarked={isBookmarked}
            userId={userData?.id}
            refetchUserBookmark={refetch}
            key={`UnifiedSearchCompanyCard${companyData.id}`}
          />
        );
      })}
      {companyDataArr?.count !== 0 && (
        <div css={buttonBox}>
          <NormalButton
            text="기업정보 더보기"
            iconObj={{
              icon: BsChevronRight,
              color: COLORS.BLUE_FIRST40,
              size: 0.75,
              position: "right",
            }}
            variant="outlined"
            buttonClick={() => {
              router.push({
                pathname: "/search",
                query: { q: router.query.q, page: 1, menu: "기업" },
              });
            }}
            wide={false}
          />
        </div>
      )}
    </section>
  );
};
