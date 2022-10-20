import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JobsList: NextPage = () => {
  const router = useRouter();

  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}${router.asPath.split("?")[0]}`}
        />
      </Head>
      <MetaHead metaData={META_JD_LIST} />
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JobsList;
