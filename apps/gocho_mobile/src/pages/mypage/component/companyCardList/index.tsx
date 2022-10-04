import { FunctionComponent } from "react";

import { useUserInfo } from "shared-api/auth";
import { useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { CompanyCard } from "shared-ui/card/companyCard";

import { listContainer } from "./style";
import { CompanyCardListProps } from "./type";

export const CompanyCardList: FunctionComponent<CompanyCardListProps> = ({ companyDataArr, isLoading }) => {
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

  return (
    <section css={listContainer}>
      {companyDataArr.map((companyData) => {
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
