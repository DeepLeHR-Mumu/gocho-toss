import { ReactElement } from "react";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { GlobalLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";

const RecruiterListPage: NextPageWithLayout = () => <div>Recruiter List Page</div>;

RecruiterListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default RecruiterListPage;
