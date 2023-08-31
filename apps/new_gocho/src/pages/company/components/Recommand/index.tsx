import { CompanyCard } from "@/components/common/CompanyCard/index";
import { HeaderTitle } from "../common/HeaderTitle";
import { cssObj } from "./style";

// TODO: user api Fetch 해 데이터 끌어오는 과정 필요
const tempCompanyArr = [
  {
    key: 1,
    logoSrc: "",
    name: "대상주식회사",
    hashTagArr: ["반도체"],
  },
  {
    key: 2,
    logoSrc: "",
    name: "한라스택폴",
    hashTagArr: ["반도체"],
  },
  {
    key: 3,
    logoSrc: "",
    name: "두산인프라코어",
    hashTagArr: ["반도체"],
  },
  {
    key: 4,
    logoSrc: "",
    name: "삼성 SDI",
    hashTagArr: ["반도체"],
  },
];

export const RecommandCompany = () => {
  return (
    <section css={cssObj.recommandWrap}>
      <div css={cssObj.headerWrap}>
        <HeaderTitle title="이런 기업은 어때요?" />
        <p css={cssObj.description}>고초대졸닷컴에서 개인화 추천 서비스를 제공하고 있어요!</p>
      </div>
      <div css={cssObj.contentBox}>
        {tempCompanyArr.map(({ key, logoSrc, name, hashTagArr }) => {
          return (
            <CompanyCard
              key={key}
              logoSrc={logoSrc}
              name={name}
              hashTagArr={hashTagArr}
              buttonHandler={() => {
                alert("이동");
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
