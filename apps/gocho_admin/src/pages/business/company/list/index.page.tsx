import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useCompanyArr } from "@/api/company/useCompanyArr";
import { ErrorScreen, LoadingScreen } from "@/component";
import { Pagination } from "@/component/common/pagination";
import { INTERNAL_URL } from "@/constant";
import { mainContainer, pageTitle } from "@/style/commonStyles";

import CompanyCard from "./component/companyCard";
import { COMPANY_SEARCH_LIMIT } from "./constant";
import { cssObj } from "./style";

const BusinessCompanyList: NextPage = () => {
  const router = useRouter();

  const {
    data: companyDataObj,
    isLoading,
    isError,
  } = useCompanyArr({
    order: "recent",
    status: "modify-waiting",
    limit: COMPANY_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * COMPANY_SEARCH_LIMIT,
  });

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const totalPage = Math.ceil(companyDataObj.count / COMPANY_SEARCH_LIMIT);

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
      <Pagination totalPage={totalPage} url={INTERNAL_URL.BUSINESS_COMPANY_LIST_URL} />
    </main>
  );
};

export default BusinessCompanyList;
