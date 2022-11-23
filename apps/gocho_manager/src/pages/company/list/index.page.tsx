import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useCompanyArr } from "@api/company/useCompanyArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { COMPANY_LIST_URL } from "@constant/internalURL";
import { mainContainer, pageTitle } from "@style/commonStyles";

import { COMPANY_LIMIT } from "./constant";
import { sectionContainer, tableContainer } from "./style";
import { CompanyCard } from "./component/companyCard";

const CompanyList: NextPage = () => {
  const router = useRouter();

  const {
    data: companyDataObj,
    isLoading,
    isError,
  } = useCompanyArr({ order: "recent", limit: COMPANY_LIMIT, offset: (Number(router.query.page) - 1) * COMPANY_LIMIT });

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const totalPage = Math.ceil(companyDataObj.count / COMPANY_LIMIT);

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 목록</h2>
      <section css={sectionContainer}>
        <table>
          <tbody css={tableContainer}>
            {companyDataObj.companyDataArr.map((company) => {
              return <CompanyCard key={`ManagerCompanyCard${company.id}`} company={company} />;
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={COMPANY_LIST_URL} />
    </main>
  );
};

export default CompanyList;
