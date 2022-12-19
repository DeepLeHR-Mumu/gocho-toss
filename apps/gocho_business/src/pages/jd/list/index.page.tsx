import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

const JdListPage: NextPageWithLayout = () => (
  <main>
    <CompanyInfoPart />
    <PageLayout>
      <section>
        This is JdListPage!!
        <div>lol</div>
      </section>
    </PageLayout>
  </main>
);

JdListPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdListPage;
