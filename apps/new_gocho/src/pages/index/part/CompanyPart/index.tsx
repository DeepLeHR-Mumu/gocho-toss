import { FunctionComponent } from "react";

import { useCompanyArr } from "@/apis/company";
import { CompanyCard } from "@/components";

import { cssObj } from "./style";

export const CompanyPart: FunctionComponent = () => {
  const { data: companyDataObj } = useCompanyArr({ order: "view" });

  return (
    <section css={cssObj.sectionContainer}>
      <h2 css={cssObj.title}>키워드 별 기업 모아보기</h2>
      <div css={cssObj.cardContainer}>
        {companyDataObj?.companyDataArr.map((company) => {
          return (
            <CompanyCard key={company.id} logoSrc={company.logoUrl} name={company.name} hashTagArr={[company.size]} />
          );
        })}
      </div>
    </section>
  );
};
