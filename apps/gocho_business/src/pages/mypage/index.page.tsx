import { ReactElement, useEffect } from "react";

import { Footer, GlobalLayout, PageLayout } from "@/components";

import { NextPageWithLayout } from "@/pages/index/type";
import { myPageFunnelEvent } from "@/ga/myPage";

import { PageHead } from "./pageHead";
import { HeaderPart } from "./part/headerPart";
import { EditPart } from "./part/editPart";
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
