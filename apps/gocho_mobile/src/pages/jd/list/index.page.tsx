import { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL, JOBS_LIST_URL } from "shared-constant/internalURL";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JdList: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: JOBS_LIST_URL, query: { page: 1, order: "recent" } });
    }
  }, [router]);

  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_JD_LIST} />
      <InvisibleH2 title="오늘의 추천 공고" />
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JdList;
