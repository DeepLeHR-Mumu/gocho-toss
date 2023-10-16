import { useEffect } from "react";
import { NextPage } from "next";

import { HiddenH1 } from "shared-ui/deeple-ds";

import { Layout } from "@/components/Layout";
import { companyHomeFunnelEvent } from "@/ga/company";

import { AllPart, CategoryPart, RecommendPart, RankPart } from "./part";
import { PageHead } from "./pageHead";

const Company: NextPage = () => {
  useEffect(() => {
    companyHomeFunnelEvent();
  }, []);

  return (
    <Layout>
      <PageHead />
      <HiddenH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />

      <CategoryPart />
      <RecommendPart />
      <RankPart />
      <AllPart />
    </Layout>
  );
};

export default Company;
