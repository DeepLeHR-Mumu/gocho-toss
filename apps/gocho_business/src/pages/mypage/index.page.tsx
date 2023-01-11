import { ReactElement } from "react";

import { Footer, GlobalLayout, PageLayout } from "@/components/global/layout";

import { NextPageWithLayout } from "../_app.page";
import { PageHead } from "./pageHead";
import { HeaderPart } from "./part/headerPart";
import { EditPart } from "./part/editPart";

const MyPage: NextPageWithLayout = () => (
  <main>
    <HeaderPart />
    <PageLayout>
      <EditPart />
    </PageLayout>
  </main>
);

MyPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      {page}
      <Footer />
    </GlobalLayout>
  </>
);
export default MyPage;
