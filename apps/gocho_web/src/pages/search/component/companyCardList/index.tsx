import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";
import { CompanyCard } from "shared-ui/card/companyCard";

import { listContainer } from "./style";
import { CompanyCardListProps } from "./type";

export const CompanyCardList: FunctionComponent<CompanyCardListProps> = ({ companyDataArr, refetchUserBookmark }) => {
  if (!companyDataArr) {
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
            refetchUserBookmark={refetchUserBookmark}
            key={`UnifiedSearchCompanyCard - ${companyData.id}`}
          />
        );
      })}
    </section>
  );
};
