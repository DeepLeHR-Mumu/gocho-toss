import type { NextPage } from "next";

import { Layout } from "@/components/global/layout";
import { CompanyInfoPart } from "./part/companyInfoPart";

const FactoryListPage: NextPage = () => (
  <>
    <CompanyInfoPart />
    <Layout>
      <div>Factory List Page</div>
    </Layout>
  </>
);

export default FactoryListPage;
