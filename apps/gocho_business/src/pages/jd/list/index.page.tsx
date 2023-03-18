import { ReactElement, useEffect } from "react";

import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout, CompanyInfoPart } from "@/components";

import { jdListPageFunnelEvent } from "@/ga";
import { ListPart, HeaderPart } from "./part";
import { cssObj } from "./style";

const JdListPage: NextPageWithLayout = () => {
  useEffect(() => {
    jdListPageFunnelEvent();
  }, []);

  return (
    <main css={cssObj.mainContainer}>
      <PageLayout>
        <HeaderPart />
        <ListPart />
      </PageLayout>
    </main>
  );
};

JdListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default JdListPage;
