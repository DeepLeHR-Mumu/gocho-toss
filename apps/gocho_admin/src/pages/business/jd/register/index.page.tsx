import { NextPage } from "next";
import { useRouter } from "next/router";

import { useJdDetail } from "@api/jd/useJdDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const JdRegisterDetail: NextPage = () => {
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { data: jobDataObj, isLoading, isError } = useJdDetail({ id: jdId });

  if (!jobDataObj || isLoading) {
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

export default JdRegisterDetail;
