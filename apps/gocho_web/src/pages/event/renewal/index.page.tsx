import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { eventFunnelEvent } from "shared-ga/event";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_EVENT } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { PartIntro } from "./part/partIntro";
import { PartNotice } from "./part/partNotice";
import { PartVideo } from "./part/partVideo";
import { PartJd } from "./part/partJd";
import { PartVOC } from "./part/partVOC";
import { PartRenewal } from "./part/partRenewal";

import { wrapper } from "./style";

const EventRenewal: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    eventFunnelEvent();
  }, []);

  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
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
