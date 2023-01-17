import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/index/type";
import { GlobalLayout, PageLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { ListPart } from "./part/listPart";
import { HeaderPart } from "./part/headerPart";

const JdListPage: NextPageWithLayout = () => (
  <main>
    <PageLayout>
      <HeaderPart />
      <ListPart />
    </PageLayout>
  </main>
);
JdListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default JdListPage;
