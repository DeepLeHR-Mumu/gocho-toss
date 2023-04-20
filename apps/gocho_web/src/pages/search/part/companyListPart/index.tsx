import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { useCompanyArr } from "shared-api/company";

import { BottomPagination } from "@component/common/molecule/bottomPagination";

import { CompanyCardList } from "../../component/companyCardList";
import { COMPANY_RESULT_LIMIT } from "../../constant";
import { title } from "./style";

export const CompanyListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDataObj, refetch } = useCompanyArr({
    q: router.query.q as string,
    order: "view",
    page: Number(router.query.page),
    size: COMPANY_RESULT_LIMIT,
  });

  return (
    <section>
      <p css={title}>기업 정보 🏢</p>
      {companyDataObj && (
        <CompanyCardList companyDataArr={companyDataObj?.companyDataArr} refetchUserBookmark={refetch} />
      )}
      {companyDataObj && (
        <BottomPagination
          totalPage={companyDataObj.pageResult.totalPages}
          linkObj={{ pathname: "/search", q: router.query.q as string }}
        />
      )}
    </section>
  );
};
