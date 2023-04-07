import { ReactElement } from "react";

import { useCompanyKeywordArr } from "@/api";
import { NextPageWithLayout } from "@/types";

import { GlobalLayout, PageLayout, ErrorScreen, LoadingScreen } from "@/component";
import { cssObj } from "./style";

const CompanyKeyword: NextPageWithLayout = () => {
  const { data: companyKeywordObj, isLoading, isError } = useCompanyKeywordArr();

  if (!companyKeywordObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <h2 css={cssObj.title}>기업 키워드</h2> <section css={cssObj.container} />
        {companyKeywordObj.map((keywordObj) =>
          keywordObj.companyArr.map((company) => (
            <div key={keywordObj.keyword}>
              <div>{company.id}</div>
              <div>{company.name}</div>
            </div>
          ))
        )}
      </PageLayout>
    </main>
  );
};

CompanyKeyword.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyKeyword;
