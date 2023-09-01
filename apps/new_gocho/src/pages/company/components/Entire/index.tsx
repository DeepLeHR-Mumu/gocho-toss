import Link from "next/link";

import { HeaderTitle } from "../common/HeaderTitle";

import { useCompanyArr } from "@/apis/company";

import { cssObj } from "./style";
import { CompanyList } from "../common/CompanyList";

// TODO: 전체 기업 보기 리스트 링크 논의
// TODO: 팔로우 로직 넣기

export const EntireCompany = () => {
  const { data: entireCompanyArr } = useCompanyArr({
    order: "view",
    size: 6,
  });

  return (
    <section css={cssObj.entrieCompanyContainer}>
      <div css={cssObj.headerBox}>
        <HeaderTitle title="전체기업" />
        <Link href="company/list" css={cssObj.etrieCompanyLinkText}>
          전체보기
        </Link>
      </div>
      <CompanyList companyData={entireCompanyArr} />
    </section>
  );
};
