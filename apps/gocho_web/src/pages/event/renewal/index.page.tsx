import { NextPage } from "next";
import { useEffect } from "react";

import { eventFunnelEvent } from "shared-ga/event";

import { PartIntro } from "./part/partIntro";
import { PartNotice } from "./part/partNotice";
import { PartVideo } from "./part/partVideo";
import { PartJd } from "./part/partJd";
import { PartVOC } from "./part/partVOC";
import { PartRenewal } from "./part/partRenewal";

import { wrapper } from "./style";

const EventRenewal: NextPage = () => {
  useEffect(() => {
    eventFunnelEvent();
  }, []);
  
  return (
    <main css={wrapper}>
      <PartIntro />
      <PartNotice />
      <PartVideo />
      <PartJd />
      <PartVOC />
      <PartRenewal />
    </main>
  );
};

export default EventRenewal;
