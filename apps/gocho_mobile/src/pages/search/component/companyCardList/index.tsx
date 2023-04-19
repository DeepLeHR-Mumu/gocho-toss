import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";
import { CompanyCard } from "@component/common/molecule/companyCard";

import { listContainer } from "./style";
import { CompanyCardListProps } from "./type";

export const CompanyCardList: FunctionComponent<CompanyCardListProps> = ({ companyDataArr, isLoading }) => {
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
        return (
          <CompanyCard
            companyData={companyData}
            isBookmarked={companyData.isBookmark}
            key={`UnifiedSearchCompanyCard${companyData.id}`}
          />
        );
      })}
    </section>
  );
};
