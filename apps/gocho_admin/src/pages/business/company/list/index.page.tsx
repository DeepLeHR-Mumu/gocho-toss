import { useRouter } from "next/router";
import { ReactElement } from "react";

import { useCompanyArr } from "@/api";
import { ErrorScreen, GlobalLayout, LoadingScreen } from "@/component";
import { Pagination } from "@/component/common/pagination";
import { INTERNAL_URL } from "@/constant";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import CompanyCard from "./component/companyCard";
import { COMPANY_SEARCH_LIMIT } from "./constant";
import { cssObj } from "./style";

const BusinessCompanyList: NextPageWithLayout = () => {
  const router = useRouter();

  const {
    data: companyDataObj,
    isLoading,
    isError,
  } = useCompanyArr({
    order: "recent",
    status: "modify-waiting",
    size: COMPANY_SEARCH_LIMIT,
    page: Number(router.query.page),
  });

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 수정 요청 목록</h2>
      <section css={cssObj.sectionContainer}>
        <table css={cssObj.tableContainer}>
          <thead>
            <tr css={cssObj.companyContainer}>
              <th css={cssObj.companyIdBox}>회사 ID</th>
              <th css={cssObj.companyNameBox}>회사 이름</th>
              <th css={cssObj.buttonContainer}> </th>
            </tr>
          </thead>
          <tbody>
            {companyDataObj.companyDataArr.map((company) => (
              <CompanyCard key={`ManagerBizCompanyCard${company.id}`} company={company} />
            ))}
          </tbody>
        </table>
      </section>
      <Pagination totalPage={companyDataObj.pageResult.totalPages} url={INTERNAL_URL.BUSINESS_COMPANY_LIST_URL} />
    </main>
  );
};

BusinessCompanyList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessCompanyList;
