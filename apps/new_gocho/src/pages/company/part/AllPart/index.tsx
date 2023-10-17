import { FunctionComponent } from "react";
import Link from "next/link";

import { useCompanyArr } from "@/apis/company";
import { CompanyRow } from "@/components";
import { INTERNAL_URL } from "@/constants";

import { HeaderTitle } from "../../component";
import { cssObj } from "./style";

export const AllPart: FunctionComponent = () => {
  const { data: companyDataObj } = useCompanyArr({
    order: "view",
    size: 6,
  });

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <HeaderTitle title="전체기업" />
        <Link href={INTERNAL_URL.COMPANY_LIST} css={cssObj.link}>
          전체보기
        </Link>
      </div>
      <div css={cssObj.companyList}>
        {companyDataObj?.companyDataArr.map(({ id, industry, size, name, logoUrl, isBookmark }) => (
          <CompanyRow
            key={id}
            company={{ id, name, size, logo: logoUrl || "", industry, bookmark: { state: isBookmark } }}
          />
        ))}
      </div>
    </section>
  );
};
