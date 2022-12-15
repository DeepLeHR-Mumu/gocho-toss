import { NextPage } from "next";
import { useRouter } from "next/router";

import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { useEditCompanyRequest } from "@api/company/useEditCompanyRequest";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const CompanyEditDetail: NextPage = () => {
  const router = useRouter();
  const companyId = Number(router.query.id);

  const {
    data: companyBeforeData,
    isLoading: isBeforeLoading,
    isError: isBeforeError,
  } = useCompanyDetail({ companyId });

  const {
    data: companyAfterData,
    isLoading: isAfterLoading,
    isError: isAfterError,
  } = useEditCompanyRequest({ companyId });

  if (!companyBeforeData || !companyAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 변경 요청 확인</h2>
    </main>
  );
};

export default CompanyEditDetail;
