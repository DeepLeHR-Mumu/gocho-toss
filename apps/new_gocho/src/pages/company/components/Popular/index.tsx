import { HeaderTitle } from "../common/HeaderTitle";
import { RankItem } from "./RankItem";
import { TodayIcon } from "./TodayIcon";

import { useCompanyArr } from "@/apis/company/useCompanyArr";

import { cssObj } from "./style";

export const PopularCompany = () => {
  const { data: PopularCompanyArr } = useCompanyArr({
    order: "popular",
    size: 5,
  });

  return (
    <section css={cssObj.popularWrap}>
      <div css={cssObj.popularHeaderWrap}>
        <HeaderTitle title="인기기업" />
        <TodayIcon />
      </div>
      <div css={cssObj.rankItemBox}>
        {PopularCompanyArr?.companyDataArr.map(({ id, name, size, logoUrl, industry }, index) => {
          return <RankItem key={id} name={name} logoUrl={logoUrl} size={size} industry={industry} rank={index + 1} />;
        })}
      </div>
    </section>
  );
};
