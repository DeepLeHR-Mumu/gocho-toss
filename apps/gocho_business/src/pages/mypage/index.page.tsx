import { ReactElement } from "react";

import { Footer, GlobalLayout, PageLayout } from "@/components/global/layout";

import { NextPageWithLayout } from "@/pages/index/type";
import { PageHead } from "./pageHead";
import { HeaderPart } from "./part/headerPart";
import { EditPart } from "./part/editPart";
import { cssObj } from "./style";

const MyPage: NextPageWithLayout = () => (
  <main css={cssObj.wrapper}>
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
