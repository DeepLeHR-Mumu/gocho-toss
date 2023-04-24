import { useRouter } from "next/router";
import { ReactElement } from "react";

import { useCompanyArr } from "@/api/company/useCompanyArr";
import { ErrorScreen, LoadingScreen, Pagination, GlobalLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import { COMPANY_SEARCH_LIMIT } from "./constant";
import { sectionContainer, tableContainer } from "./style";
import { CompanyCard } from "./component/companyCard";

const CompanyList: NextPageWithLayout = () => {
  const router = useRouter();

  const {
    data: companyDataObj,
    isLoading,
    isError,
  } = useCompanyArr({
    order: "recent",
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
      <h2 css={pageTitle}>기업 목록</h2>
      <section css={sectionContainer}>
        <table>
          <tbody css={tableContainer}>
            {companyDataObj.companyDataArr.map((company) => (
              <CompanyCard key={`ManagerCompanyCard${company.id}`} company={company} />
            ))}
          </tbody>
        </table>
      </section>
      <Pagination totalPage={companyDataObj.pageResult.totalPages} url={INTERNAL_URL.COMPANY_LIST_URL} />
    </main>
  );
};

CompanyList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyList;
