import { ReactElement } from "react";

import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";
import { GlobalLayout } from "@/component";

const Factory: NextPageWithLayout = () => (
  <main css={mainContainer}>
    <h2 css={pageTitle}>공장 등록</h2>
    <section>공장 등록 영역</section>
  </main>
);

Factory.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default Factory;
