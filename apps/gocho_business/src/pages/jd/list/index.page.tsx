import { ReactElement, useEffect } from "react";

import { NextPageWithLayout } from "@/pages/index/type";
import { GlobalLayout, PageLayout, CompanyInfoPart } from "@/components";

import { jdListPageFunnelEvent } from "@/ga/jdList";
import { ListPart } from "./part/listPart";
import { HeaderPart } from "./part/headerPart";
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
