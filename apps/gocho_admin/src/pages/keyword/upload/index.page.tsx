import { ReactElement } from "react";

import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout } from "@/component";

import { cssObj } from "./style";

const CompanyKeywordUpload: NextPageWithLayout = () => (
  <main css={cssObj.wrapper}>
    <PageLayout>
      <h2 css={cssObj.title}>기업 키워드 업로드</h2>
      <section css={cssObj.container}>
        <div>키워드 업로드</div>
      </section>
    </PageLayout>
  </main>
);

CompanyKeywordUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyKeywordUpload;
