import { useEffect } from "react";

import { NextPageWithLayout } from "@/types";
import { PageLayout, CompanyInfoPart } from "@/components";

import { jdListPageFunnelEvent } from "@/ga";
import { ListPart, HeaderPart } from "./part";
import { cssObj } from "./style";

const JdListPage: NextPageWithLayout = () => {
  useEffect(() => {
    jdListPageFunnelEvent();
  }, []);

  return (
    <>
      <CompanyInfoPart />
      <main css={cssObj.mainContainer}>
        <PageLayout>
          <HeaderPart />
          <ListPart />
        </PageLayout>
      </main>
    </>
  );
};

export default JdListPage;
