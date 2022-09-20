import { FunctionComponent } from "react";

import { useUserInfo } from "@api/auth";
import { useUserCompanyBookmarkArr } from "@api/bookmark";
import { CompanyCard } from "@component/card/companyCard";
import { dummyArrCreator } from "@util/dummyArrCreator";

import { listContainer, noDataText } from "./style";
import { CompanyListPartProps } from "./type";

export const CompanyPreviewPart: FunctionComponent<CompanyListPartProps> = ({ companyDataArr, count, isLoading }) => {
  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  if (!companyDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(6).map((dummy) => {
          return <CompanyCard isSkeleton key={`UnifiedSearchCompanyCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (count === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {companyDataArr.slice(0, 6).map((companyData) => {
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
    </section>
  );
};
