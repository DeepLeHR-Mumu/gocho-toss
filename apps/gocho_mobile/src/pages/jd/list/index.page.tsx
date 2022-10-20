import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JdList: NextPage = () => {
  const router = useRouter();
  
  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_JD_LIST} />
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JdList;
