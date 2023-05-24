import { useEffect } from "react";

import { PageLayout } from "@/components";

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
      <PageHead />
      <HeaderPart />
      <PageLayout>
        <EditPart />
      </PageLayout>
    </main>
  );
};

export default MyPage;
