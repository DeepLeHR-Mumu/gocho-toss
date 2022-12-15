import { NextPage } from "next";
import { useRouter } from "next/router";

import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const CompanyRegisterDetail: NextPage = () => {
  const router = useRouter();
  const companyId = Number(router.query.id);

  const { data: companyDataObj, isLoading, isError } = useCompanyDetail({ companyId });

  if (!companyDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 등록 요청 확인</h2>
    </main>
  );
};

export default CompanyRegisterDetail;
