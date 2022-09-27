import type { NextPage } from "next";
import Head from "next/head";

import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { JobPart } from "./indexComponent/part/jobPart";
import { SuggestedJobPart } from "./indexComponent/part/suggestedJobPart";
import { BannerPart } from "./indexComponent/part/bannerPart";
import { CompanyCommentPart } from "./indexComponent/part/companyCommentPart";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>생산직 NO.1 취업 플랫폼 - 고초대졸닷컴</title>
      </Head>
      <MainCarouselPart />
      <JobPart />
      <BannerPart />
      <SuggestedJobPart />
      <CompanyCommentPart />
    </main>
  );
};

export default Home;
