import { useEffect } from "react";
import { NextPage } from "next";

import { HiddenH1 } from "shared-ui/deeple-ds";

import { Layout } from "@/components";
import { homeFunnelEvent } from "@/ga/home";

import { AdPart } from "./index/part/AdPart";
import { JdPart } from "./index/part/JdPart";
import { CompanyPart } from "./index/part/CompanyPart";
import { PageHead } from "./index/pageHead";

const Home: NextPage = () => {
  useEffect(() => {
    homeFunnelEvent();
  }, []);

  return (
    <main>
      <PageHead />
      <HiddenH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <AdPart />
      <Layout>
        <JdPart />
        <CompanyPart />
      </Layout>
    </main>
  );
};

export default Home;
