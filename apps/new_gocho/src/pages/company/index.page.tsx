import { NextPage } from "next";
import { Layout } from "@/components/Layout/index";

const CompanyList: NextPage = () => {
  return (
    <Layout>
      <h1>카테고리 별 기업</h1>
      <hr />
      <h1>이런 기업은 어때요?</h1>
      <hr />
      <h1>인기기업</h1>
      <hr />
      <h1>전체기업</h1>
    </Layout>
  );
};

export default CompanyList;
