import { useEffect } from "react";
import { NextPage } from "next";

import { HiddenH1, Divider } from "shared-ui/deeple-ds";

import { Layout } from "@/components";
import { jdHomeFunnelEvent } from "@/ga/jd";

import { HotJd, JdSlider, JdBanner } from "./part";
import { cssObj } from "./style";
import { PageHead } from "./pageHead";

const JdHome: NextPage = () => {
  useEffect(() => {
    jdHomeFunnelEvent();
  }, []);

  return (
    <main>
      <PageHead />
      <HiddenH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <JdBanner />
      <Layout>
        <HotJd />
        <div css={cssObj.divider}>
          <Divider />
        </div>
        <JdSlider title="마감 임박 공고 ⏰" order="end" filter="valid" />
        <div css={cssObj.divider}>
          <Divider />
        </div>
        <JdSlider title="오늘 올라온 공고 💡" order="recent" filter="valid" />
        <div css={cssObj.blank} />
      </Layout>
    </main>
  );
};

export default JdHome;
