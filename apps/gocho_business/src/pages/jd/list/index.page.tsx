import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/index/type";
import { GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

const JdListPage: NextPageWithLayout = () => <div>Jd List Page</div>;

JdListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default JdListPage;
