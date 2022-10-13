import { NextPage } from "next";
import { useEffect } from "react";

import { tipListFunnelEvent } from "shared-ga/tip";

import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  useEffect(() => {
    tipListFunnelEvent();
  }, []);
  return (
    <main>
      <AdPart />
      <ListPart />
    </main>
  );
};

export default Tip;
