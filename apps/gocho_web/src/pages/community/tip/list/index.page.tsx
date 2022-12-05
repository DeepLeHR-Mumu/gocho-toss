import { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { tipListFunnelEvent } from "shared-ga/tip";

import { PageHead } from "./pageHead";
import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  useEffect(() => {
    tipListFunnelEvent();
  }, []);
  return (
    <main>
      <PageHead />
      <InvisibleH1 title="생산직 취업꿀팁 - 고초대졸닷컴" />

      <ListPart />
    </main>
  );
};

export default Tip;
