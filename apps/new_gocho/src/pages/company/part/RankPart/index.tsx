import { FunctionComponent } from "react";

import { Divider } from "shared-ui/deeple-ds";
import { dummyArrCreator } from "shared-util";

import { useCompanyArr } from "@/apis/company/useCompanyArr";

import { HeaderTitle, RankCompanyCard, TodayIcon } from "../../component";
import { cssObj } from "./style";

export const RankPart: FunctionComponent = () => {
  const { data: companyDataObj } = useCompanyArr({
    order: "rank",
    size: 5,
  });

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.headerContainer}>
          <HeaderTitle title="인기기업" />
          <TodayIcon />
        </div>
        <div css={cssObj.companyList}>
          {companyDataObj
            ? companyDataObj.companyDataArr.map(({ id, name, size, logoUrl, industry }, index) => (
                <RankCompanyCard key={id} rank={index + 1} company={{ id, name, logoUrl, size, industry }} />
              ))
            : dummyArrCreator(5).map((dummy, index) => <RankCompanyCard key={`rankPart${dummy}`} rank={index + 1} />)}
        </div>
      </section>
      <Divider />
    </>
  );
};
