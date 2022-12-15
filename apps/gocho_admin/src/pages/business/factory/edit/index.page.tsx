import { NextPage } from "next";
import { useRouter } from "next/router";

import { useFactoryDetail } from "@api/factory/useFactoryDetail";
import { useEditFactoryRequest } from "@api/factory/useEditFactoryRequest";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const FactoryEditDetail: NextPage = () => {
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const {
    data: factoryBeforeData,
    isLoading: isBeforeLoading,
    isError: isBeforeError,
  } = useFactoryDetail({ factoryId });

  const {
    data: factoryAfterData,
    isLoading: isAfterLoading,
    isError: isAfterError,
  } = useEditFactoryRequest({ factoryId });

  if (!factoryBeforeData || !factoryAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 변경 요청 확인</h2>
    </main>
  );
};

export default FactoryEditDetail;
