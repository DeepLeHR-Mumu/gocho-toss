import type { NextPage } from "next";

// import { ErrorScreen, LoadingScreen } from "@component/screen";
import { mainContainer, pageTitle } from "@style/commonStyles";

const BusinessFactoryList: NextPage = () => {
  // if (!jobDataObj || isLoading) {
  //   return <LoadingScreen />;
  // }
  //
  // if (isError) {
  //   return <ErrorScreen />;
  // }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 등록/수정 요청 목록</h2>
    </main>
  );
};

export default BusinessFactoryList;
