import type { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { MainPageMeta } from "shared-ui/common/meta/mainPage";
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
      <MainPageMeta isMobile />
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
