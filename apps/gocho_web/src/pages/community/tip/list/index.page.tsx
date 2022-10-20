import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

import { GOCHO_DESKTOP_URL  } from "shared-constant/internalURL";
import { tipListFunnelEvent } from "shared-ga/tip";

import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    tipListFunnelEvent();
  }, []);
  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL }${pathname}`} />
      </Head>
      <ListPart />
    </main>
  );
};

export default Tip;
