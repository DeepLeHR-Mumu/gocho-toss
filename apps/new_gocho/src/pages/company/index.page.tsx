import { useEffect } from "react";
import { NextPage } from "next";

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
      <CategoryPart />
      <RecommendPart />
      <RankPart />
      <AllPart />
    </Layout>
  );
};

export default Company;
