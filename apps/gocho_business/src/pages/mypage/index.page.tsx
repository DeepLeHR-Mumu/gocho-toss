import { useEffect } from "react";
import { NextPage } from "next";

import { PageLayout } from "@/components";
import { myPageFunnelEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { EditPart } from "./part";

const MyPage: NextPage = () => {
  useEffect(() => {
    myPageFunnelEvent();
  }, []);

  return (
    <>
      <PageHead />
      <PageLayout>
        <EditPart />
      </PageLayout>
    </>
  );
};

export default MyPage;
