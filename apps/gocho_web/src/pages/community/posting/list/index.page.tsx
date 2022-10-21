import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { postingListFunnelEvent } from "shared-ga/posting";

import { ListPart } from "./part/listPart";

const Posting: NextPage = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    postingListFunnelEvent();
  }, []);

  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${pathname}`} />
      </Head>
      <ListPart />
    </main>
  );
};

export default Posting;
