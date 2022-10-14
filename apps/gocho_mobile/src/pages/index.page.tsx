import type { NextPage } from "next";
import { useEffect } from "react";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_INDEX } from "shared-constant/meta";
import { homeFunnelEvent } from "shared-ga/home";
import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { JobPart } from "./indexComponent/part/jobPart";
import { SuggestedJobPart } from "./indexComponent/part/suggestedJobPart";
import { BannerPart } from "./indexComponent/part/bannerPart";
import { CompanyCommentPart } from "./indexComponent/part/companyCommentPart";

const Home: NextPage = () => {
  useEffect(() => {
    homeFunnelEvent();
  }, []);
  return (
    <main>
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
