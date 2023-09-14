import { NextPage } from "next";

import { Layout } from "@/components/Layout";

import { AllPart, CategoryPart, RecommendPart, RankPart } from "./part";

const Company: NextPage = () => (
  <Layout>
    <CategoryPart />
    <RecommendPart />
    <RankPart />
    <AllPart />
  </Layout>
);

export default Company;
