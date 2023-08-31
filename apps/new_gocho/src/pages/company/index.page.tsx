import { NextPage } from "next";
import { Divider } from "shared-ui/deeple-ds";
import { Layout } from "@/components/Layout/index";
import { CategoryCompany } from "./components/Category/index";
import { RecommandCompany } from "./components/Recommand/index";

const CompanyList: NextPage = () => {
  return (
    <Layout>
      <CategoryCompany />
      <Divider />
      <RecommandCompany />
      <Divider />
      <h1>인기기업</h1>
      <Divider />
      <h1>전체기업</h1>
    </Layout>
  );
};

export default CompanyList;
