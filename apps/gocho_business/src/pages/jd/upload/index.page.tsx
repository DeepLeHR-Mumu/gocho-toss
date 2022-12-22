import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";

import { HeaderPart } from "./part/headerPart";

const JdUploadPage: NextPageWithLayout = () => (
  <main>
    <PageLayout>
      <section>
        <HeaderPart />
      </section>
    </PageLayout>
  </main>
);

JdUploadPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdUploadPage;
