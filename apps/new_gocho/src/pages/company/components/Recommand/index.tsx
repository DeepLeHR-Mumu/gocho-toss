import { CompanyCard } from "@/components/common/CompanyCard/index";
import { HeaderTitle } from "../HeaderTitle";

import { useCompanyArr } from "@/apis/company/useCompanyArr";

import { cssObj } from "./style";

export const RecommandCompany = () => {
  const { data: recommandArr } = useCompanyArr({
    order: "rand",
    size: 4,
  });

  return (
    <section css={cssObj.recommandWrap}>
      <div css={cssObj.headerWrap}>
        <HeaderTitle title="이런 기업은 어때요?" />
        <p css={cssObj.description}>고초대졸닷컴에서 개인화 추천 서비스를 제공하고 있어요!</p>
      </div>
      <div css={cssObj.contentBox}>
        {recommandArr?.companyDataArr.map(({ id, logoUrl, name, industry }) => {
          return (
            <CompanyCard
              key={id}
              logoSrc={logoUrl || ""}
              name={name}
              hashTagArr={[industry]}
              buttonHandler={() => {
                // TODO: 유저 팔로우 버튼 api 기능 추가 필요
                alert("이동");
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
