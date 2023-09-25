import { NextPage } from "next";

import { Layout } from "@/components/Layout";

import { AllPart, CategoryPart, RecommendPart, RankPart } from "./part";
import { PageHead } from "./pageHead";

const Company: NextPage = () => (
  <Layout>
    <PageHead />
    <CategoryPart />
    <RecommendPart />
    <RankPart />
    <AllPart />
  </Layout>
);

export default Company;
