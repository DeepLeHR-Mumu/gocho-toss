import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/index/type";
import { PageLayout, GlobalLayout } from "@/components/global/layout";

const JdUploadPage: NextPageWithLayout = () => (
  <main>
    <PageLayout>
      <section>
        This is JdUploadPage!!
        <div>lol</div>
      </section>
    </PageLayout>
  </main>
);

JdUploadPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdUploadPage;
