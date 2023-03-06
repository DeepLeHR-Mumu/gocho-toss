import { FunctionComponent } from "react";

import { dummyArrCreator } from "shared-util";

import { ExpJobCard } from "../expJobCard";
import { ExpJobCardListProps } from "./type";
import { listContainer } from "./style";

export const ExpJobCardList: FunctionComponent<ExpJobCardListProps> = ({ companyDataArr, isLoading }) => {
  if (!companyDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(6).map((dummy) => {
          return <ExpJobCard isSkeleton key={`ExpJobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {companyDataArr.map((companyData) => {
        return <ExpJobCard companyData={companyData} key={`ExpJobCard${companyData.id}`} />;
      })}
    </section>
  );
};
