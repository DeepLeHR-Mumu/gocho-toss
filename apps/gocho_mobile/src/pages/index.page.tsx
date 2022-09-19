import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";

import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { JobPart } from "./indexComponent/part/jobPart";
import { BannerPart } from "./indexComponent/part/bannerPart";

const Home: NextPage = () => {
  return (
    <main css={css``}>
      <Head>
        <title>생산직 NO.1 취업 플랫폼 - 고초대졸닷컴</title>
      </Head>
      <MainCarouselPart />
      <JobPart />
      <BannerPart />
    </main>
  );
};

export default Home;
