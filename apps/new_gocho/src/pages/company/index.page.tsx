import { NextPage } from "next";
import { Divider } from "shared-ui/deeple-ds";
import { Layout } from "@/components/Layout";

import { CategoryCompany } from "./components/Category";
import { RecommandCompany } from "./components/Recommand";
import { RankCompany } from "./components/Rank";
import { EntireCompany } from "./components/Entire";

const CompanyList: NextPage = () => {
  return (
    <Layout>
      <CategoryCompany />
      <Divider />
      <RecommandCompany />
      <Divider />
      <RankCompany />
      <Divider />
      <EntireCompany />
    </Layout>
  );
};

export default CompanyList;
