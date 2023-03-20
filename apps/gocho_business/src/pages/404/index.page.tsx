import { ReactElement, useEffect } from "react";
import Image from "next/image";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import jobi_404 from "@/public/image/jobi_404.svg";
import { NextPageWithLayout } from "@/types";
import { Footer, GlobalLayout } from "@/components";
import { notFoundPageErrorEvent } from "@/ga";

import { cssObj } from "./style";
import { PageHead } from "./pageHead";

const NotFoundPage: NextPageWithLayout = () => {
  useEffect(() => {
    const prevUrl = sessionStorage.getItem("prevUrl");
    notFoundPageErrorEvent(prevUrl || "/");
  }, []);

  return (
    <main css={cssObj.container}>
      <InvisibleH2 title="없는 페이지" />
      <div css={cssObj.jobiImage}>
        <Image src={jobi_404} alt="" fill priority />
      </div>
      <p css={cssObj.title}>죄송합니다. 해당 페이지를 찾을 수 없습니다.</p>
      <div css={cssObj.catchPhraseContainer}>
        <p css={cssObj.catchPhrase}>생산/기능직 No.1 취업 플랫폼</p>
        <p css={cssObj.catchPhrase}>고초대졸 닷컴</p>
      </div>
    </main>
  );
};

NotFoundPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      {page}
      <Footer />
    </GlobalLayout>
  </>
);
export default NotFoundPage;
