import { NextPage } from "next";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_EVENT } from "shared-constant/meta";
import { PartIntro } from "./part/partIntro";
import { PartNotice } from "./part/partNotice";
import { PartVideo } from "./part/partVideo";
import { PartJd } from "./part/partJd";
import { PartVOC } from "./part/partVOC";
import { PartRenewal } from "./part/partRenewal";

import { wrapper } from "./style";

const EventRenewal: NextPage = () => {
  return (
    <main css={wrapper}>
      <MetaHead metaData={META_EVENT} />
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
