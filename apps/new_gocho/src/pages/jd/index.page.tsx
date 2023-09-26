import { useEffect } from "react";
import { NextPage } from "next";

import { Divider } from "shared-ui/deeple-ds";

import { Layout } from "@/components";
import { jdHomeFunnelEvent } from "@/ga/jd";

import { HotJd, JdSlider } from "./part";
import { cssObj } from "./style";
import { PageHead } from "./pageHead";

const JdHome: NextPage = () => {
  useEffect(() => {
    jdHomeFunnelEvent();
  }, []);

  return (
    <main>
      <PageHead />
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
