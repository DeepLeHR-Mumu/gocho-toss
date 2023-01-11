import { ReactElement } from "react";
import Image from "next/image";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import jobi_500 from "@/public/image/jobi_500.svg";

import { NextPageWithLayout } from "@/pages/index/type";
import { Footer, GlobalLayout } from "@/components/global/layout";

import { PageHead } from "./pageHead";
import { cssObj } from "./style";

const NotFoundPage: NextPageWithLayout = () => (
  <main css={cssObj.container}>
    <InvisibleH2 title="없는 페이지" />
    <div css={cssObj.jobiImage}>
      <Image src={jobi_500} alt="" objectFit="fill" layout="fill" />
    </div>
    <p css={cssObj.title}>열심히 고치고 있습니다</p>
    <div css={cssObj.catchPhraseContainer}>
      <p css={cssObj.catchPhrase}>고장, 불편 사항은 아래 채널톡에서 신고 부탁드려요 😢</p>
    </div>
  </main>
);

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
