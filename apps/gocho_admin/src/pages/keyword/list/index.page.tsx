import { ReactElement } from "react";

import { useCompanyKeywordArr } from "@/api";
import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout, ErrorScreen, LoadingScreen } from "@/component";

import { KeywordCard } from "./component";
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
    <main>
      <PageLayout>
        <h2 css={cssObj.title}>기업 키워드 목록</h2>
        <section>
          <ul css={cssObj.thead}>
            <li>키워드</li>
            <li>해당 회사</li>
            <li>키워드 삭제</li>
          </ul>
        </section>
        <ul css={cssObj.tbody}>
          {companyKeywordObj.map((keywordObj) => (
            <KeywordCard key={keywordObj.keyword} keywordObj={keywordObj} />
          ))}
        </ul>
      </PageLayout>
    </main>
  );
};

CompanyKeyword.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyKeyword;
