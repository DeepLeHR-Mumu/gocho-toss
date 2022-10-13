import { NextPage } from "next";
import { useEffect } from "react";

import { postingListFunnelEvent } from "shared-ga/posting";

import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const Posting: NextPage = () => {
  useEffect(() => {
    postingListFunnelEvent();
  }, []);
  return (
    <main>
      <AdPart />
      <ListPart />
    </main>
  );
};

export default Posting;
