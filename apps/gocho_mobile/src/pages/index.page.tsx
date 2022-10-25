import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_INDEX } from "shared-constant/meta";
import { homeFunnelEvent } from "shared-ga/home";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { JobPart } from "./indexComponent/part/jobPart";
import { SuggestedJobPart } from "./indexComponent/part/suggestedJobPart";
import { BannerPart } from "./indexComponent/part/bannerPart";
import { CompanyCommentPart } from "./indexComponent/part/companyCommentPart";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    homeFunnelEvent();
  }, []);
  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_INDEX} />
      <MainCarouselPart />
      <JobPart />
      <BannerPart />
      <SuggestedJobPart />
      <CompanyCommentPart />
    </main>
  );
};

export default Home;
