import { NextPage } from "next";
import { useEffect } from "react";

import { eventFunnelEvent } from "shared-ga/event";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";

import { PartIntro } from "./part/partIntro";
import { PartNotice } from "./part/partNotice";
import { PartVideo } from "./part/partVideo";
import { PartJd } from "./part/partJd";
import { PartVOC } from "./part/partVOC";
import { PartRenewal } from "./part/partRenewal";
import { PageHead } from "./component/pageHead";

import { wrapper } from "./style";

const EventRenewal: NextPage = () => {
  useEffect(() => {
    eventFunnelEvent();
  }, []);

  return (
    // w
    <main css={wrapper}>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 새로워진 고초대졸닷컴을 만나보세요" />

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
