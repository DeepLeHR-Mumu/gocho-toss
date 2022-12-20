import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { ListPart } from "./part/listPart";
import { HeaderPart } from "./part/headerPart";

const JdListPage: NextPageWithLayout = () => (
  <main>
    <CompanyInfoPart />
    <PageLayout>
      <HeaderPart />
      <ListPart />
    </PageLayout>
  </main>
);

JdListPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdListPage;
