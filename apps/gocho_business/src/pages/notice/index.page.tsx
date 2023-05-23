import { ReactElement, useEffect } from "react";
import Image from "next/image";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import jobi_500 from "@/public/image/jobi_500.svg";

import { NextPageWithLayout } from "@/types";
import { Footer, GlobalLayout } from "@/components";
import { unknownPageErrorEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const NoticePage: NextPageWithLayout = () => {
  useEffect(() => {
    const prevUrl = sessionStorage.getItem("prevUrl");
    unknownPageErrorEvent(prevUrl || "/");
  }, []);

  return (
    <main css={cssObj.container}>
      <InvisibleH2 title="페이지 점검 중" />
      <div css={cssObj.jobiImage}>
        <Image src={jobi_500} alt="" priority fill />
      </div>
      <p css={cssObj.title}>⚠️ 서버 점검 중입니다 ⚠️</p>
      <div css={cssObj.catchPhraseContainer}>
        <p css={cssObj.catchPhrase}>
          현재 앱 출시에 대비하여 서비스를 점검 중에 있습니다. 점검 시간 완료 시간은 오후 9~10시로 예상되며,
          <br />
          최대한 빠르게 점검 후 더 좋은 서비스로 찾아 뵙겠습니다. 다시 한 번 사용에 불편드려 죄송합니다 😢
          <br />
        </p>
      </div>
    </main>
  );
};

NoticePage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      {page}
      <Footer />
    </GlobalLayout>
  </>
);
export default NoticePage;
