import { NextPage } from "next";
import { useRouter } from "next/router";

import { useJdDetail } from "@api/jd/useJdDetail";
import { useEditJdRequest } from "@api/jd/useEditJdRequest";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const JdEditDetail: NextPage = () => {
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { data: jdBeforeData, isLoading: isBeforeLoading, isError: isBeforeError } = useJdDetail({ id: jdId });
  const { data: jdAfterData, isLoading: isAfterLoading, isError: isAfterError } = useEditJdRequest({ id: jdId });

  if (!jdBeforeData || !jdAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 변경 요청 확인</h2>
    </main>
  );
};

export default JdEditDetail;