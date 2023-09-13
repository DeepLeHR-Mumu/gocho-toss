import Link from "next/link";

import { useCompanyArr } from "@/apis/company";
import { HeaderTitle } from "../HeaderTitle";


import { cssObj } from "./style";
import { CompanyList } from "../CompanyList";

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
