import { NextPage } from "next";
import { useEffect } from "react";

import { postingListFunnelEvent } from "shared-ga/posting";

import { ListPart } from "./part/listPart";

const Posting: NextPage = () => {
  useEffect(() => {
    postingListFunnelEvent();
  }, []);
  return (
    <main>
      <ListPart />
    </main>
  );
};

export default Posting;
