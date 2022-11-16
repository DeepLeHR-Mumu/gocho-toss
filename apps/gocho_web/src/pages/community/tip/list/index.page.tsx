import { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { CommunityTipListMeta } from "shared-ui/common/meta";
import { tipListFunnelEvent } from "shared-ga/tip";

import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  useEffect(() => {
    tipListFunnelEvent();
  }, []);
  return (
    <main>
      <CommunityTipListMeta />
      <InvisibleH1 title="생산직 취업꿀팁 - 고초대졸닷컴" />

      <ListPart />
    </main>
  );
};

export default Tip;
