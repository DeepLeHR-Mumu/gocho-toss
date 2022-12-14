import { NextPage } from "next";
import { useRouter } from "next/router";

import { useJobDetail } from "@api/job/useJobDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

const JdRegisterDetail: NextPage = () => {
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { data: jobDataObj, isLoading, isError } = useJobDetail({ id: jdId });

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
