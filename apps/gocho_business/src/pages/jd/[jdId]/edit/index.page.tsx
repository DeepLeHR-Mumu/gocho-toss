import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";

const JdEditPage: NextPageWithLayout = () => (
  <main>
    <PageLayout>
      <section>
        This is JdEditPage!!
        <div>lol</div>
      </section>
    </PageLayout>
  </main>
);

JdEditPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEditPage;
