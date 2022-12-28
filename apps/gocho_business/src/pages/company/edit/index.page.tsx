import { ReactElement } from "react";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { GlobalLayout, Footer } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";

const CompanyEditPage: NextPageWithLayout = () => <div>ss</div>;

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
    <Footer />
  </GlobalLayout>
);

export default CompanyEditPage;
