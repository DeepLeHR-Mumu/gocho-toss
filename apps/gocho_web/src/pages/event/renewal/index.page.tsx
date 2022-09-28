import { NextPage } from "next";

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
