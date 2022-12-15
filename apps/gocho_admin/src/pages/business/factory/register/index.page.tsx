import { NextPage } from "next";
import { useRouter } from "next/router";

import { useFactoryDetail } from "@api/factory/useFactoryDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const FactoryRegisterDetail: NextPage = () => {
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const { data: factoryDataObj, isLoading, isError } = useFactoryDetail({ factoryId });

  if (!factoryDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 등록 요청 확인</h2>
    </main>
  );
};

export default FactoryRegisterDetail;
