import type { NextPage } from "next";

import { PageLayout } from "@/components";

import { HeaderPart, InfoPart, ButtonPart, JdPart, SidePart } from "./index/part";
import { cssObj } from "./index/style";

const HomePage: NextPage = () => (
  <div>
    <HeaderPart />
    <PageLayout>
      <div css={cssObj.container}>
        <div css={cssObj.contentContainer}>
          <InfoPart />
          <ButtonPart />
          <JdPart />
        </div>
        <div css={cssObj.sideBarContainer}>
          <SidePart />
        </div>
      </div>
    </PageLayout>
  </div>
);

export default HomePage;
