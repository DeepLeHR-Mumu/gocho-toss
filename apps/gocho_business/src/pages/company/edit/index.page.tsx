import { ReactElement } from "react";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { GlobalLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";

const CompanyEditPage: NextPageWithLayout = () => <div>Company Edit Page</div>;

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default CompanyEditPage;
