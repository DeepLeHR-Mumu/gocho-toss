import { Divider } from "shared-ui/deeple-ds";

import { CompanyCard } from "@/components";
import { useCompanyArr } from "@/apis/company/useCompanyArr";

import { HeaderTitle } from "../../component";
import { cssObj } from "./style";

export const RecommendPart = () => {
  const { data: companyDataObj } = useCompanyArr({
    order: "pay",
    size: 4,
  });

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.headerContainer}>
          <HeaderTitle title="이런 기업은 어때요?" />
          <p css={cssObj.desc}>고초대졸닷컴에서 개인화 추천 서비스를 제공하고 있어요!</p>
        </div>
        <div css={cssObj.companyList}>
          {companyDataObj?.companyDataArr.map(({ id, logoUrl, name, industry, isBookmark }) => (
            <CompanyCard
              key={id}
              company={{ id, name, logoSrc: logoUrl || "", hashTagArr: industry, bookmark: { state: isBookmark } }}
            />
          ))}
        </div>
      </section>
      <Divider />
    </>
  );
};
