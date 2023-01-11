import { ReactElement, useState } from "react";

import { NextPageWithLayout } from "@/pages/_app.page";
import { GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

const JdListPage: NextPageWithLayout = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("errorOccured");
  }
  return (
    <div>
      Jd List Page
      <button
        type="button"
        onClick={() => {
          setError(true);
        }}
      >
        에러버튼
      </button>
    </div>
  );
};

JdListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default JdListPage;
