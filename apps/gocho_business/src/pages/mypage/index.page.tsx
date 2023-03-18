import { ReactElement, useEffect } from "react";

import { Footer, GlobalLayout, PageLayout } from "@/components";

import { NextPageWithLayout } from "@/types";
import { myPageFunnelEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { HeaderPart, EditPart } from "./part";
import { cssObj } from "./style";

const MyPage: NextPageWithLayout = () => {
  useEffect(() => {
    myPageFunnelEvent();
  }, []);

  return (
    <main css={cssObj.wrapper}>
      <HeaderPart />
      <PageLayout>
        <EditPart />
      </PageLayout>
    </main>
  );
};

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
