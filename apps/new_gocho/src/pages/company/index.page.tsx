import { NextPage } from "next";
import { Layout } from "@/components/Layout/index";
import { CategoryCompany } from "./components/Category/index";

import { cssObj } from "./style";

const CompanyList: NextPage = () => {
  return (
    <Layout>
      <CategoryCompany />
      <hr css={cssObj.hrStyle} />
      <h1>이런 기업은 어때요?</h1>
      <hr css={cssObj.hrStyle} />
      <h1>인기기업</h1>
      <hr css={cssObj.hrStyle} />
      <h1>전체기업</h1>
    </Layout>
  );
};

export default CompanyList;
