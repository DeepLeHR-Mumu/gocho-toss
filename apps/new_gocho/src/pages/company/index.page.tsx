import { NextPage } from "next";
import { Divider } from "shared-ui/deeple-ds";
import { Layout } from "@/components/Layout/index";

import { CategoryCompany } from "./components/Category/index";
import { RecommandCompany } from "./components/Recommand/index";
import { PopularCompany } from "./components/Popular";

const CompanyList: NextPage = () => {
  return (
    <Layout>
      <CategoryCompany />
      <Divider />
      <RecommandCompany />
      <Divider />
      <PopularCompany />
      <Divider />
      <h1>전체기업</h1>
    </Layout>
  );
};

export default CompanyList;
