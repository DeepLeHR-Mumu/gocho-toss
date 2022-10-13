import { NextPage } from "next";
import { useEffect } from "react";

import { tipListFunnelEvent } from "shared-ga/tip";

import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  useEffect(() => {
    tipListFunnelEvent();
  }, []);
  return (
    <main>
      <ListPart />
    </main>
  );
};

export default Tip;
