import Link from "next/link";

import { CompanyRow } from "@/components";
import { HeaderTitle } from "../common/HeaderTitle";

import { cssObj } from "./style";
import { useCompanyArr } from "@/apis/company";
import { ENTIRE_COMPANY_TEXT } from "./constant";

// TODO: 전체 기업 보기 리스트 링크 논의
// TODO: 팔로우 로직 처리 질문하기

export const EntireCompany = () => {
  const { data: entireCompanyArr } = useCompanyArr({
    order: "view",
    size: 6,
  });

  return (
    <section css={cssObj.entrieCompanyContainer}>
      <div css={cssObj.headerBox}>
        <HeaderTitle title="전체기업" />
        <Link href="company/all" css={cssObj.etrieCompanyLinkText}>
          {ENTIRE_COMPANY_TEXT}
        </Link>
      </div>

      <div css={cssObj.companyListBox}>
        {entireCompanyArr?.companyDataArr.map(({ id, industry, size, name, logoUrl }) => {
          return (
            <CompanyRow
              key={id}
              id={id}
              size={size}
              logo={logoUrl}
              name={name}
              industry={industry}
              border
              follow={{
                state: false,
                onClick: () => {
                  alert("팔로우하기");
                },
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
