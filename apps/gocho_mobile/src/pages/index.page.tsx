import type { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { homeFunnelEvent } from "shared-ga/home";

import { MainCarouselPart } from "./index/part/mainCarouselPart";
import { JobPart } from "./index/part/jobPart";
import { SuggestedJobPart } from "./index/part/suggestedJobPart";
import { BannerPart } from "./index/part/bannerPart";
import { CompanyCommentPart } from "./index/part/companyCommentPart";
import { PageHead } from "./index/component/pageHead";

const Home: NextPage = () => {
  useEffect(() => {
    homeFunnelEvent();
  }, []);
  return (
    <main>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />

      <MainCarouselPart />
      <JobPart />
      <BannerPart />
      <SuggestedJobPart />
      <CompanyCommentPart />
    </main>
  );
};

export default Home;
