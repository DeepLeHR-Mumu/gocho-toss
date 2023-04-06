import { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { homeFunnelEvent } from "shared-ga/home";

import { CompanyCommentPart } from "@pages/index/part/companyCommentPart";

import { MainCarouselPart } from "./index/part/mainCarouselPart";
import { JobPart } from "./index/part/jobPart";
import { TipPart } from "./index/part/tipPart";
import { PageHead } from "./index/pageHead";

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
      <CompanyCommentPart />
      <TipPart />
    </main>
  );
};

export default Home;
